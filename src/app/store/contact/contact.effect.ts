import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addContact,
  addContactFailure,
  addContactSuccess,
  deleteContact,
  deleteContactFailure,
  deleteContactSuccess,
  loadContacts,
  loadContactsFailure,
  loadContactsSuccess,
  toggleActiveContact,
  toggleActiveContactFailure,
  toggleActiveContactSuccess,
  updateContact,
  updateContactFailure,
  updateContactSuccess,
} from './contact.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { notify } from '../toast/toast.actions';
import { ContactsService } from '../../services/contacts.service';

@Injectable()
export class ContactEffect {
  actions$ = inject(Actions);
  contactsService = inject(ContactsService);

  // load contacts
  loadContactsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContacts),
      exhaustMap((data) =>
        this.contactsService.loadAll().pipe(
          map((res) => {
            console.log('🚀 ~ ContactEffect ~ map ~ res:', res);
            return loadContactsSuccess({ contacts: res });
          }),
          catchError((error) =>
            of(
              loadContactsFailure({ message: error.message }),
              notify({
                message: 'Error ' + error.message,
                color: 'alert-error',
                position: 'toast-top toast-center',
                duration: 5000,
              })
            )
          )
        )
      )
    )
  );

  // add contact
  addContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(addContact),
      exhaustMap((data) =>
        this.contactsService.save(data.contact).pipe(
          switchMap((res) => [
            addContactSuccess({ contact: res }),
            notify({
              message: 'Contact created',
              color: 'alert-success',
            }),
          ]),
          catchError((error) =>
            of(
              addContactFailure({ message: error.message }),
              notify({
                message: 'Error ' + error.message,
                color: 'alert-error',
                position: 'toast-top toast-center',
                duration: 5000,
              })
            )
          )
        )
      )
    )
  );

  // update contact
  updateContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      exhaustMap((data) =>
        this.contactsService.update(data.contact).pipe(
          switchMap((res) => [
            updateContactSuccess({ contact: res }),
            notify({
              message: 'Contact updated',
              color: 'alert-success',
            }),
          ]),
          catchError((error) =>
            of(
              updateContactFailure({ message: error.message }),
              notify({
                message: 'Error ' + error.message,
                color: 'alert-error',
                position: 'toast-top toast-center',
                duration: 5000,
              })
            )
          )
        )
      )
    )
  );

  // delete contact
  deleteContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      exhaustMap((data) =>
        this.contactsService.destroy(data.id).pipe(
          switchMap((res) => [
            deleteContactSuccess({ id: data.id }),
            notify({
              message: 'Contact deleted',
              color: 'alert-success',
            }),
          ]),
          catchError((error) =>
            of(
              deleteContactFailure({ message: error.message }),
              notify({
                message: 'Error ' + error.message,
                color: 'alert-error',
                position: 'toast-top toast-center',
                duration: 5000,
              })
            )
          )
        )
      )
    )
  );

  // toggle contact
  toggleContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleActiveContact),
      exhaustMap((data) =>
        this.contactsService.toggleStatus(!data.active, data.id).pipe(
          switchMap((res) => [
            toggleActiveContactSuccess({ id: data.id }),
            notify({
              message: 'Contact changed',
              color: 'alert-success',
            }),
          ]),
          catchError((error) =>
            of(
              toggleActiveContactFailure({ message: error.message }),
              notify({
                message: 'Error ' + error.message,
                color: 'alert-error',
                position: 'toast-top toast-center',
                duration: 5000,
              })
            )
          )
        )
      )
    )
  );
}
