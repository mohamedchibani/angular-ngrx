import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../store/category/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories = signal<CategoryModel[]>([]);
  apiUrl = 'http://localhost:3001/categories';
  http = inject(HttpClient);

  all(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }
}
