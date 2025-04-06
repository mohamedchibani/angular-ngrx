import { contacts } from '../../data';
import { ContactState } from './contact.model';

export const contactState: ContactState = {
  contacts: contacts,
  edit: false,
  showForm: false,
  contact: undefined,
};
