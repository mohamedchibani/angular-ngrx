import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryStore } from '../../../store/category/category.store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryModel } from '../../../store/category/category.model';

@Component({
  selector: 'app-category-form',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  isOpen = false;
  categoryStore = inject(CategoryStore);

  categoryForm!: FormGroup;

  constructor() {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  ngOnInit() {
    this.isOpen = this.categoryStore.isOpen();

    const category = this.categoryStore.category();

    if (category) {
      this.categoryForm.patchValue({
        name: category.name,
      });
    }
  }

  get name() {
    return this.categoryForm.get('name');
  }

  submit() {
    const category: CategoryModel = {
      name: this.name?.value,
      slug: this.name?.value.toLowerCase(),
    };

    this.categoryStore.create(category).subscribe();
  }
}
