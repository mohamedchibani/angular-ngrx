import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { categoryState } from './category.state';
import { CategoryService } from '../../services/category.service';
import { tap } from 'rxjs';

export const CategoryStore = signalStore(
  withState(categoryState),
  withMethods((store, categoryService = inject(CategoryService)) => ({
    loadCategories() {
      patchState(store, {
        isLoading: true,
      });
      return categoryService
        .all()
        .pipe(tap((categories) => patchState(store, { categories })));
    },
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
