import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { categoryState } from './category.state';

export const CategoryStore = signalStore(
  withState(categoryState),
  withMethods((store) => ({
    add() {
      patchState(store, { isOpen: true });
    },
    init() {
      patchState(store, {
        isOpen: false,
        category: null,
        isLoading: false,
        errorMessage: '',
      });
    },
  }))
);
