import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { categoryState } from './category.state';
import { CategoryService } from '../../services/category.service';
import { catchError, tap, throwError } from 'rxjs';
import { CategoryModel } from './category.model';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { HttpErrorResponse } from '@angular/common/http';

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
      return categoryService.all().pipe(
        tap((categories) =>
          patchState(store, { categories, isLoading: false })
        ),
        catchError((error) => {
          patchState(store, {
            errorMessage: this.handleError(error),
            isLoading: false,
          });
          return throwError(() => error);
        })
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
        ),
        catchError((error) => {
          patchState(store, {
            errorMessage: this.handleError(error),
            isLoading: false,
          });
          return throwError(() => error);
        })
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
        ),
        catchError((error) => {
          patchState(store, {
            errorMessage: this.handleError(error),
            isLoading: false,
          });
          return throwError(() => error);
        })
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
        ),
        catchError((error) => {
          patchState(store, {
            errorMessage: this.handleError(error),
            isLoading: false,
          });
          return throwError(() => error);
        })
      );
    },
    handleError(error: HttpErrorResponse): string {
      if (error.error instanceof ErrorEvent) {
        return 'Client-side error: ' + error.error.message;
      }

      switch (error.status) {
        case 404:
          return `Resource not found: ${error.message}`;
        case 400:
          return `Bad Request: Form not Valid !`;
        case 401:
          return `Unauthorized: Please log in`;
        case 403:
          return `Forbidden: You don't have permission to access this resource`;
        case 500:
          return `Server error: Please try again later`;
        default:
          return `Backend error ${error.status}: ${error.message}`;
      }
    },
  }))
);
