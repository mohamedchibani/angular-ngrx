import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';

const trackToast = (state: AppState) => state.toast;

export const selectToastMessage = createSelector(
  trackToast,
  (state) => state.message
);
export const selectToastColor = createSelector(
  trackToast,
  (state) => state.color
);
export const selectToastPosition = createSelector(
  trackToast,
  (state) => state.position
);
export const selectToastDuration = createSelector(
  trackToast,
  (state) => state.duration
);
export const selectToastIsVisible = createSelector(
  trackToast,
  (state) => state.isVisible
);

export const selectToast = createSelector(trackToast, (state) => state);
