import { ContactState } from './contact/contact.model';
import { contactReducer } from './contact/contact.reducer';
import { counterReducer } from './counter/counter.reducer';
import { CounterModel } from './counter/counter.model';
import { toastReducer } from './toast/toast.reducer';
import { ToastState } from './toast/toast.model';
import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  counter: CounterModel;
  contacts: ContactState;
  toast: ToastState;
  auth: AuthState;
}

export const appStore = {
  counter: counterReducer,
  contacts: contactReducer,
  toast: toastReducer,
  auth: authReducer,
  router: routerReducer,
};
