import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-form',
  imports: [NgClass],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  isOpen = false;
}
