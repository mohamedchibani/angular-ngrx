import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { map, Observable } from 'rxjs';

interface Action {
  reaction?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // private readonly apiUrl = 'http://localhost:3001/articles';
  private readonly apiUrl = 'https://dummyjson.com/auth/posts';

  http = inject(HttpClient);

  all(): Observable<Article[]> {
    return this.http
      .get<{ posts: Article[] }>(this.apiUrl)
      .pipe(map((res) => res.posts));
  }

  save(data: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, data);
  }

  get(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: Article): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${id}`, data);
  }

  actions(id: number, data: Action) {
    return this.http.patch<Article>(`${this.apiUrl}/${id}`, data);
  }

  destroy(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.apiUrl}/${id}`);
  }
}
