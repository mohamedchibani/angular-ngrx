import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';

export const trackAuth = (state: AppState) => state.auth;

export const selectUser = createSelector(trackAuth, (state) => state.user);

export const selectToken = createSelector(
  trackAuth,
  (state) => state.refreshToken
);

export const selectIsAuthenticated = createSelector(
  trackAuth,
  (state) => state.isAuthenticated
);

export const selectErrorMessage = createSelector(
  trackAuth,
  (state) => state.errorMessage
);
