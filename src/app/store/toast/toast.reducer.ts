import { createReducer, on } from '@ngrx/store';
import { toastState } from './toast.state';
import { closeNotification, notify } from './toast.actions';

export const toastReducer = createReducer(
  toastState,
  on(notify, (state, action) => ({
    ...state,
    message: action.message,
    type: action.type ?? state.type,
    position: action.position ?? state.position,
    duration: action.duration ?? state.duration,
    isVisible: true,
  })),
  on(closeNotification, (state) => ({ ...state, isVisible: false }))
);
