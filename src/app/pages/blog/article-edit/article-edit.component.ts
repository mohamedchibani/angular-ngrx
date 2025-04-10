import { CategoryStore } from './../../../store/category/category.store';
import { BlogService } from './../../../services/blog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Article } from '../../../models/article';
import { Location } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
})
export class ArticleEditComponent {
  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);
  categoryStore = inject(CategoryStore);

  id!: number;

  articleForm!: FormGroup;

  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      category: new FormControl('', Validators.required),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      image: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.loadArticle(res['id']);
      this.id = res['id'];
    });
  }

  loadArticle(id: number) {
    this.blogService.get(id).subscribe((res) => {
      this.articleForm.patchValue(res);
      // this.articleForm.setValue(res);
    });
  }

  submit() {
    if (this.articleForm.invalid) {
      return;
    }

    const article: Article = this.articleForm.value;

    this.blogService.update(this.id, article).subscribe({
      next: (_) => {
        this.location.back();
      },
      error: (error) => console.log(error),
      complete: () => {},
    });
  }

  get title() {
    return this.articleForm.get('title');
  }

  get body() {
    return this.articleForm.get('body');
  }

  get image() {
    return this.articleForm.get('image');
  }

  get category() {
    return this.articleForm.get('category');
  }
}
