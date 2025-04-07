import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addContact,
  addContactFailure,
  addContactSuccess,
  deleteContact,
  toggleActiveContact,
  updateContact,
} from './contact.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { notify } from '../toast/toast.actions';
import { ContactsService } from '../../services/contacts.service';

@Injectable()
export class ContactEffect {
  actions$ = inject(Actions);
  contactsService = inject(ContactsService);

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

  updateContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      exhaustMap((data) =>
        this.contactsService
          .update(data.contact)
          .pipe(
            map((res) =>
              notify({ message: 'Contact updated', color: 'alert-success' })
            )
          )
      )
    )
  );

  deleteContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      exhaustMap((data) =>
        this.contactsService
          .destroy(data.id)
          .pipe(
            map((res) =>
              notify({ message: 'Contact deleted', color: 'alert-success' })
            )
          )
      )
    )
  );

  toggleContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleActiveContact),
      exhaustMap((data) =>
        this.contactsService.toggleStatus(!data.active, data.id).pipe(
          map((data) => {
            const status = data.active ? 'desactivated' : 'activated';
            return notify({
              message: `Contact ${status}`,
              color: 'alert-info',
            });
          })
        )
      )
    )
  );
}
