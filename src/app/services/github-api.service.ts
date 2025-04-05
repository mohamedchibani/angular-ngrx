import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SearchResponse, User } from '../models/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  urlApi = 'https://api.github.com';

  http = inject(HttpClient);

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`);
  }

  searchUser(search: string): Observable<User[]> {
    return this.http
      .get<SearchResponse>(`${this.urlApi}/search/users?q=${search}`)
      .pipe(map((res) => res.items));
  }
}
