import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';

export const trackContacts = (state: AppState) => state.contacts;

export const selectContacts = createSelector(
  trackContacts,
  (state) => state.contacts
);

export const selectContactOptions = createSelector(
  trackContacts,
  ({ showForm, edit }) => ({ edit, showForm })
);

export const selectContact = createSelector(
  trackContacts,
  (state) => state.contact
);
