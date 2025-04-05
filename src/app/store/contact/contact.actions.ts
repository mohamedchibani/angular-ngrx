import { createAction, props } from '@ngrx/store';
import { ContactModel } from './contact.model';

export const loadContacts = createAction('[Contacts] Load list of contacts');
export const addContact = createAction(
  '[Contacts] Create a contact',
  props<{ contact: ContactModel }>()
);
export const updateContact = createAction(
  '[Contacts] Update a contact',
  props<{ contact: ContactModel }>()
);
export const deleteContact = createAction(
  '[Contacts] Delete a contact',
  props<{ id: number }>()
);

export const toggleActiveContact = createAction(
  '[Contacts] Toggle active a contact',
  props<{ id: number }>()
);
