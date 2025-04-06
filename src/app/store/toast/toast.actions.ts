import { createAction, props } from '@ngrx/store';

export const notify = createAction(
  '[Execute a toast]',
  props<{
    message: string;
    color?: string;
    position?: string;
    duration?: number;
  }>()
);

export const closeNotification = createAction('[Destroy a toast]');
