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
} from './contact.actions';
import { contacts } from '../../data';

export const contactReducer = createReducer(
  contactState,
  on(loadContacts, (state) => ({ ...state, contacts: contacts })),
  // add contact
  on(addContact, (state) => ({
    ...state,
  })),
  on(addContactSuccess, (state, action) => ({
    ...state,
    showForm: false,
    contacts: [action.contact, ...state.contacts],
  })),
  on(addContactFailure, (state, action) => ({
    ...state,
    message: action.message,
  })),
  on(updateContact, (state, action) => {
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
  on(deleteContact, (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== action.id),
  })),
  on(toggleActiveContact, (state, action) => ({
    ...state,
    contacts: state.contacts.map((contact) =>
      contact.id === action.id
        ? { ...contact, active: !contact.active }
        : contact
    ),
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
