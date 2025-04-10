import { Component, inject } from '@angular/core';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryStore } from '../../../store/category/category.store';

@Component({
  selector: 'app-category-list',
  imports: [CategoryFormComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categoryStore = inject(CategoryStore);
}
