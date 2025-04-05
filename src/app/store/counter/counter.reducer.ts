import { createReducer, on } from '@ngrx/store';
import { counterState } from './counter.state';
import { descrement, increment, reset } from './counter.actions';

export const counterReducer = createReducer(
  counterState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(descrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
