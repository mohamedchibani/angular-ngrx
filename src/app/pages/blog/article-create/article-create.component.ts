import { BlogService } from './../../../services/blog.service';
import { Article } from '../../../models/article';
import { CategoryService } from './../../../services/category.service';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  imports: [FormsModule],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css',
})
export class ArticleCreateComponent {
  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  router = inject(Router);

  submit(myForm: NgForm) {
    if (myForm.invalid) {
      return;
    }
    const article: Article = {
      ...myForm.value,
      views: 0,
      reaction: {
        likes: 0,
        dislikes: 0,
      },
      author: 1,
    };

    this.blogService.save(article).subscribe({
      next: (res) => {
        this.router.navigate(['/blog/list']);
      },
      error: (error) => console.log(error),
      complete: () => {},
    });
  }
}
