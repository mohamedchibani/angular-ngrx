import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { go } from './router.actions';
import { tap } from 'rxjs';

export class RouterEffect {
  actions$ = inject(Actions);
  router = inject(Router);

  goEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(go),
        tap(({ path, queryParams }) =>
          this.router.navigate(path, { queryParams })
        )
      ),
    { dispatch: false }
  );
}
