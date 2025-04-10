import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { categoryState } from './category.state';
import { CategoryService } from '../../services/category.service';
import { tap } from 'rxjs';
import { CategoryModel } from './category.model';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withDevtools('category'),
  withState(categoryState),
  withMethods((store, categoryService = inject(CategoryService)) => ({
    init() {
      patchState(store, {
        isOpen: false,
        category: null,
        isLoading: false,
        errorMessage: '',
      });
    },
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
      return categoryService.persist(category).pipe(
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
    edit(category: CategoryModel) {
      patchState(store, { category, isOpen: true });
    },
    modify(category: CategoryModel, id: number) {
      return categoryService.update(category, id).pipe(
        tap((category) =>
          patchState(store, {
            categories: store
              .categories()
              .map((currentCategory) =>
                currentCategory.id === id ? category : currentCategory
              ),
            isOpen: false,
            isLoading: false,
            category: null,
          })
        )
      );
    },
    delete(id: number) {
      return categoryService.destroy(id).pipe(
        tap(() =>
          patchState(store, {
            categories: store
              .categories()
              .filter((currentCategory) => currentCategory.id !== id),
          })
        )
      );
    },
  }))
);
