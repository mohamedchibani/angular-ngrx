import { Component, inject } from '@angular/core';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryStore } from '../../../store/category/category.store';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../../store/category/category.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-category-list',
  imports: [CategoryFormComponent, AsyncPipe],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categoryStore = inject(CategoryStore);
}
