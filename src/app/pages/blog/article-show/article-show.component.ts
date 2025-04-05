import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleCardComponent } from '../../../components/blog/article-card/article-card.component';
import { Article } from '../../../models/article';
import { BlogService } from '../../../services/blog.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-article-show',
  imports: [ArticleCardComponent],
  templateUrl: './article-show.component.html',
  styleUrl: './article-show.component.css',
})
export class ArticleShowComponent {
  route = inject(ActivatedRoute);
  blogService = inject(BlogService);

  article = signal({} as Article);

  ngOnInit() {
    this.route.params.subscribe((res) => this.loadArticle(res['id']));
  }

  loadArticle(id: number) {
    this.blogService
      .get(id)
      .pipe(
        switchMap((res) => {
          if (res.id) {
            return this.blogService.actions(res.id, {
              views: (res.views ?? 0) + 1,
            });
          }

          return of(res);
        })
      )
      .subscribe((res) => {
        this.article.set(res);
      });
  }
}
