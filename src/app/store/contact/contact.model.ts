export interface ContactModel {
  id?: number;
  name: string;
  phone: string;
  active: boolean;
}

export interface ContactState {
  contacts: ContactModel[];
  edit: boolean;
  showForm: boolean;
  contact: ContactModel | undefined;
}
