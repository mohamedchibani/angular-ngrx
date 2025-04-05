import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories = signal<Category[]>([]);
  apiUrl = 'http://localhost:3001/categories';
  http = inject(HttpClient);

  all(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
