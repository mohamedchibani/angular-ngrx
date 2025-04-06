import { createReducer } from '@ngrx/store';
import { toastState } from './toast.state';

export const toastReducer = createReducer(toastState);
