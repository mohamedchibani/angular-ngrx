import { ContactModel, ContactState } from './contact/contact.model';
import { contactReducer } from './contact/contact.reducer';
import { counterReducer } from './counter/counter.reducer';
import { CounterModel } from './counter/counter.model';
import { toastReducer } from './toast/toast.reducer';
import { ToastState } from './toast/toast.model';

export const appStore = {
  counter: { name: 'counter', reducer: counterReducer },
  contacts: { name: 'contacts', reducer: contactReducer },
  toast: { name: 'toast', reducer: toastReducer },
};

export interface AppState {
  counter: CounterModel;
  contacts: ContactState;
  toast: ToastState;
}
