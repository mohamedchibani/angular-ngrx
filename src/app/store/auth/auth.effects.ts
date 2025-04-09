import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailure, loginSuccess } from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { go } from '../router/router.actions';

@Injectable()
export class AuthEffect {
  authService = inject(AuthService);
  actions$ = inject(Actions);

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((credential) =>
        this.authService
          .login(credential.username, credential.password)
          .pipe(map((user) => loginSuccess({ user })))
      ),
      catchError((error) => of(loginFailure({ message: error.message })))
    )
  );

  goAfterLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      map(() => go({ path: ['/home'], queryParams: { q: 'Sidel' } }))
    )
  );
}
