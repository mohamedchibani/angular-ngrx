import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryStore } from '../../../store/category/category.store';

@Component({
  selector: 'app-category-form',
  imports: [NgClass],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  isOpen = false;
  categoryStore = inject(CategoryStore);

  ngOnInit() {
    this.isOpen = this.categoryStore.isOpen();
  }
}
