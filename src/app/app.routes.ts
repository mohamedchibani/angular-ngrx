import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayoutBlogComponent } from './pages/blog/layout-blog/layout-blog.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: (infoUrl) => {
      console.log(infoUrl);
      return '/home';
    },
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'elearning',
    loadComponent: () =>
      import('../app/pages/courses/courses.component').then(
        (c) => c.CoursesComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'users',
    loadComponent: () =>
      import('../app/pages/github/github.component').then(
        (c) => c.GithubComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('../app/pages/todos/todos.component').then(
        (c) => c.TodosComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('../app/pages/counter-page/counter-page.component').then(
        (c) => c.CounterPageComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'blog',
    component: LayoutBlogComponent,
    loadChildren: () =>
      import('./pages/blog/blog.routes').then((m) => m.routes),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
