import { createAction, props } from '@ngrx/store';
import { UserModel } from './auth.model';

// login
export const login = createAction(
  '[Auth] login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] login successfully',
  props<{ user: UserModel }>()
);

export const loginFailure = createAction(
  '[Auth] login with failure',
  props<{ message: string }>()
);

// logout
export const logout = createAction('[Auth] Logout');
