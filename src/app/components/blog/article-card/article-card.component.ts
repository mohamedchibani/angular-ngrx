import { BlogService } from './../../../services/blog.service';
import { Component, input, inject } from '@angular/core';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  article = input.required<Article>();

  blogService = inject(BlogService);

  like(article: Article) {
    if (article.id && article.reaction) {
      article.reaction.likes++;
      this.blogService
        .actions(article.id, { reaction: article.reaction })
        .subscribe((res) => console.log(res));
    }
  }

  dislike(article: Article) {
    if (article.id && article.reaction) {
      article.reaction.dislikes++;
      this.blogService
        .actions(article.id, { reaction: article.reaction })
        .subscribe((res) => console.log(res));
    }
  }
}
