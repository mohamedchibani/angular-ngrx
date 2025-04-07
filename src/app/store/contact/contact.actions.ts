import { createAction, props } from '@ngrx/store';
import { ContactModel } from './contact.model';

// load contact
export const loadContacts = createAction('[Contacts] Load list of contacts');

export const loadContactsSuccess = createAction(
  '[Contacts] Load list of contacts successfully',
  props<{ contacts: ContactModel[] }>()
);
export const loadContactsFailure = createAction(
  '[Contacts] Load list of contacts with failure',
  props<{ message: string }>()
);

// add contact
export const addContact = createAction(
  '[Contacts] Create a contact',
  props<{ contact: ContactModel }>()
);

export const addContactSuccess = createAction(
  '[Contacts] Create a contact successfully',
  props<{ contact: ContactModel }>()
);

export const addContactFailure = createAction(
  '[Contacts] Create a contact with failure',
  props<{ message: string }>()
);

// update contact
export const updateContact = createAction(
  '[Contacts] Update a contact',
  props<{ contact: ContactModel }>()
);

export const updateContactSuccess = createAction(
  '[Contacts] Update a contact successfully',
  props<{ contact: ContactModel }>()
);

export const updateContactFailure = createAction(
  '[Contacts] Update a contact with failure',
  props<{ message: string }>()
);

// delete contact
export const deleteContact = createAction(
  '[Contacts] Delete a contact',
  props<{ id: number }>()
);

export const deleteContactSuccess = createAction(
  '[Contacts] Delete a contact successfully',
  props<{ id: number }>()
);

export const deleteContactFailure = createAction(
  '[Contacts] Delete a contact with failure',
  props<{ message: string }>()
);

export const toggleActiveContact = createAction(
  '[Contacts] Toggle active a contact',
  props<{ id: number; active: boolean }>()
);

export const toggleActiveContactSuccess = createAction(
  '[Contacts] Toggle active a contact successfully',
  props<{ id: number }>()
);

export const toggleActiveContactFailure = createAction(
  '[Contacts] Toggle active a contact with failure',
  props<{ message: string }>()
);

export const editContact = createAction(
  '[Contacts] Edit a contact',
  props<{ contact: ContactModel }>()
);

export const show = createAction('[Contacts] Show a form contact');
export const cancel = createAction('[Contacts] Cancel ');
