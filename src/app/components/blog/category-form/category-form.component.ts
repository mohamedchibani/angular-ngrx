import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryStore } from '../../../store/category/category.store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
  }

  get name() {
    return this.categoryForm.get('name');
  }
}
