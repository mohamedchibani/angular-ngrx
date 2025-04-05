import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleShowComponent } from './article-show/article-show.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
    title: 'List',
  },
  {
    path: 'create',
    component: ArticleCreateComponent,
    title: 'Create',
  },
  {
    path: ':id',
    component: ArticleShowComponent,
    title: 'Show',
  },
  {
    path: 'edit/:id',
    component: ArticleEditComponent,
    title: 'Edit',
  },
];
