import { ContactModel, ContactState } from './contact/contact.model';
import { contactReducer } from './contact/contact.reducer';
import { counterReducer } from './counter/counter.reducer';
import { CounterModel } from './counter/counter.model';

export const appStore = {
  counter: { name: 'counter', reducer: counterReducer },
  contacts: { name: 'contacts', reducer: contactReducer },
};

export interface AppState {
  counter: CounterModel;
  contacts: ContactState;
}
