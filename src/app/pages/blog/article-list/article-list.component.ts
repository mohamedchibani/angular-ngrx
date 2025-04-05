import { BlogService } from './../../../services/blog.service';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../models/article';
import { ArticleCardComponent } from '../../../components/blog/article-card/article-card.component';

@Component({
  selector: 'app-article-list',
  imports: [RouterLink, ArticleCardComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  blogService = inject(BlogService);
  articles = signal<Article[]>([]);

  ngOnInit() {
    this.blogService.all().subscribe((res) => this.articles.set(res));
  }
}
