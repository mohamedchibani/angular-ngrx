import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addContact,
  deleteContact,
  toggleActiveContact,
  updateContact,
} from './contact.actions';
import { map } from 'rxjs';
import { notify } from '../toast/toast.actions';

@Injectable()
export class ContactEffect {
  actions$ = inject(Actions);

  addContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(addContact),
      map(() => notify({ message: 'Contact created', color: 'alert-success' }))
    )
  );

  updateContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      map(() => notify({ message: 'Contact updated', color: 'alert-warning' }))
    )
  );

  deleteContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      map(() => notify({ message: 'Contact deleted', color: 'alert-error' }))
    )
  );

  toggleContactEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleActiveContact),
      map(() => notify({ message: 'Contact changed', color: 'alert-info' }))
    )
  );
}
