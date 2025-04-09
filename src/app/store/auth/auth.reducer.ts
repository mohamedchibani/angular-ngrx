import { createReducer, on } from '@ngrx/store';
import { authState } from './auth.state';
import { login, loginFailure, loginSuccess } from './auth.actions';

export const authReducer = createReducer(
  authState,
  on(login, (state) => state),
  on(loginSuccess, (state, action) => ({
    ...state,
    token: action.user.accessToken,
    user: action.user,
    refreshToken: action.user.refreshToken,
    isAuthenticated: !!action.user.accessToken,
    errorMessage: '',
  })),
  on(loginFailure, (state, action) => ({
    ...state,
    errorMessage: action.message,
  }))
);
