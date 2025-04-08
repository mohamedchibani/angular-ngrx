import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AuthRes } from '../models/user';
import { omit } from 'lodash';
import { Router } from '@angular/router';
import { UserModel } from '../store/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = signal<string | null>(null);
  user = signal<UserModel | null>(null);

  private readonly apiUrl = 'https://dummyjson.com/auth/login';

  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    this.loadUserTokenLocalStorage();
  }

  loadUserTokenLocalStorage() {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      this.user.set(JSON.parse(storedUser));
      this.token.set(storedToken);
    }
  }

  login(username: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, { username, password }).pipe(
      tap((res) => {
        this.setToken(res);
        this.setUser(res);
      })
    );
  }

  setUser(res: AuthRes) {
    localStorage.setItem(
      'user',
      JSON.stringify(omit(res, ['token', 'refreshToken']))
    );
  }

  setToken(res: AuthRes) {
    localStorage.setItem('token', res.accessToken);
  }

  getUser(): UserModel | null {
    return this.user();
  }

  getToken(): string | null {
    return this.token();
  }

  isAthenticated() {
    return !!this.getToken();
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
