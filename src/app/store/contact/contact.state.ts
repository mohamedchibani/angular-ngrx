import { contacts } from '../../data';
import { ContactState } from './contact.model';

export const contactState: ContactState = {
  contacts: [],
  edit: false,
  showForm: false,
  contact: undefined,
  message: '',
};
