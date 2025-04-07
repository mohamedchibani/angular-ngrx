import { createReducer, on } from '@ngrx/store';
import { contactState } from './contact.state';
import {
  loadContacts,
  addContact,
  updateContact,
  deleteContact,
  toggleActiveContact,
  show,
  cancel,
  editContact,
  addContactSuccess,
  addContactFailure,
  updateContactSuccess,
  updateContactFailure,
  deleteContactSuccess,
  deleteContactFailure,
  toggleActiveContactSuccess,
  toggleActiveContactFailure,
  loadContactsSuccess,
  loadContactsFailure,
} from './contact.actions';

export const contactReducer = createReducer(
  contactState,

  // load contact
  on(loadContacts, (state) => ({ ...state })),
  on(loadContactsSuccess, (state, action) => ({
    ...state,
    contacts: action.contacts,
  })),
  on(loadContactsFailure, (state, action) => ({
    ...state,
    message: action.message,
  })),

  // add contact
  on(addContact, (state) => ({
    ...state,
  })),
  on(addContactSuccess, (state, action) => ({
    ...state,
    showForm: false,
    contacts: [action.contact, ...state.contacts],
    message: '',
  })),
  on(addContactFailure, (state, action) => ({
    ...state,
    message: action.message,
  })),

  // update contact
  on(updateContact, (state) => {
    return {
      ...state,
    };
  }),
  on(updateContactSuccess, (state, action) => {
    return {
      ...state,
      contacts: state.contacts.map((contact) =>
        contact.id === action.contact.id ? action.contact : contact
      ),
      showForm: false,
      edit: false,
      contact: undefined,
    };
  }),
  on(updateContactFailure, (state, action) => {
    return {
      ...state,
      message: action.message,
    };
  }),

  // delete contact
  on(deleteContact, (state) => ({
    ...state,
  })),
  on(deleteContactSuccess, (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== action.id),
  })),
  on(deleteContactFailure, (state, action) => ({
    ...state,
    message: action.message,
  })),

  // toggle active
  on(toggleActiveContact, (state, action) => ({
    ...state,
  })),
  on(toggleActiveContactSuccess, (state, action) => ({
    ...state,
    contacts: state.contacts.map((contact) =>
      contact.id === action.id
        ? { ...contact, active: !contact.active }
        : contact
    ),
  })),
  on(toggleActiveContactFailure, (state, action) => ({
    ...state,
    message: action.message,
  })),
  on(show, (state) => ({
    ...state,
    showForm: true,
    edit: false,
    contact: undefined,
  })),
  on(cancel, (state) => ({
    ...state,
    showForm: false,
    edit: false,
    contact: undefined,
  })),
  on(editContact, (state, action) => ({
    ...state,
    contact: action.contact,
    showForm: true,
    edit: true,
  }))
);
