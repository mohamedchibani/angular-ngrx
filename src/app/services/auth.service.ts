import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AuthRes, AuthUser } from '../models/user';
import { omit } from 'lodash';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = signal<string | null>(null);
  user = signal<AuthUser | null>(null);

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

  login(username: string, password: string): Observable<AuthRes> {
    console.log('🚀 ~ AuthService ~ login ~ password:', password);
    console.log('🚀 ~ AuthService ~ login ~ username:', username);
    return this.http.post<AuthRes>(this.apiUrl, { username, password }).pipe(
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

    this.user.set(omit(res, ['token', 'refreshToken']) as AuthUser);
  }

  setToken(res: AuthRes) {
    localStorage.setItem('token', res.accessToken);
    this.token.set(res.accessToken);
  }

  getUser(): AuthUser | null {
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
