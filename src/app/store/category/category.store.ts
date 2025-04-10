import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { categoryState } from './category.state';
import { CategoryService } from '../../services/category.service';
import { tap } from 'rxjs';
import { CategoryModel } from './category.model';

export const CategoryStore = signalStore(
  withState(categoryState),
  withMethods((store, categoryService = inject(CategoryService)) => ({
    loadCategories() {
      patchState(store, {
        isLoading: true,
      });
      return categoryService
        .all()
        .pipe(
          tap((categories) =>
            patchState(store, { categories, isLoading: false })
          )
        );
    },
    create(category: CategoryModel) {
      patchState(store, { isLoading: true, errorMessage: '', category: null });
      return categoryService
        .persist(category)
        .pipe(
          tap((category) =>
            patchState(store, {
              categories: [category, ...store.categories()],
              isOpen: false,
              isLoading: false,
            })
          )
        );
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
