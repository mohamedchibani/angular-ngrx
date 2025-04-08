import { AuthState } from './auth.model';

export const authState: AuthState = {
  user: null,
  token: '',
  refreshToken: '',
  isAuthenticated: false,
  errorMessage: '',
};
