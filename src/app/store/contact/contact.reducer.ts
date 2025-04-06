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
} from './contact.actions';
import { contacts } from '../../data';

export const contactReducer = createReducer(
  contactState,
  on(loadContacts, (state) => ({ ...state, contact: contacts })),
  on(addContact, (state, action) => ({
    ...state,
    showForm: false,
    contacts: [action.contact, ...state.contacts],
  })),
  on(updateContact, (state, action) => ({
    ...state,
    contacts: state.contacts.map((contact) =>
      contact.id === action.contact.id ? action.contact : contact
    ),
  })),
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
  on(show, (state) => ({ ...state, showForm: true })),
  on(cancel, (state) => ({ ...state, showForm: false, edit: false }))
);
