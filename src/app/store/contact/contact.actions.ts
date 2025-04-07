import { createAction, props } from '@ngrx/store';
import { ContactModel } from './contact.model';

export const loadContacts = createAction('[Contacts] Load list of contacts');
export const addContact = createAction(
  '[Contacts] Create a contact',
  props<{ contact: ContactModel }>()
);

export const addContactSuccess = createAction(
  '[Contacts] Create a contact successfully',
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
  props<{ id: number; active: boolean }>()
);

export const editContact = createAction(
  '[Contacts] Edit a contact',
  props<{ contact: ContactModel }>()
);

export const show = createAction('[Contacts] Show a form contact');
export const cancel = createAction('[Contacts] Cancel ');
