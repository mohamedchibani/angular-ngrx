import { createSelector } from '@ngrx/store';
import { CounterModel } from './counter.model';

interface AppState {
  counter: CounterModel;
}

export const trackCounter = (state: AppState) => state.counter;

export const selectCount = createSelector(trackCounter, (state) => state.count);
