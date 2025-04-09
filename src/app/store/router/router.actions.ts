import { createAction, props } from '@ngrx/store';

export const go = createAction(
  '[Router] go',
  props<{ path: any[]; queryParams?: object }>()
);
