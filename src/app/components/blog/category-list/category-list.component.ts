import { Component, inject } from '@angular/core';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryStore } from '../../../store/category/category.store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-category-list',
  imports: [CategoryFormComponent, AsyncPipe],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categoryStore = inject(CategoryStore);

  deleteCategory(id: number) {
    if (!confirm('are you sur to delete this category')) {
      return;
    }
    this.categoryStore.delete(id).subscribe();
  }
}
