export interface UserModel {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: UserModel | null;
  token: string;
  refreshToken: string;
  isAuthenticated: boolean;
  errorMessage: string;
}
