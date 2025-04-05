import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment count');
export const descrement = createAction('[Counter] Decrement count');
export const reset = createAction('[Counter] Reset count');
