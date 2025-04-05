import { Component, inject } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { User } from '../../models/user';
import { ListGithubComponent } from '../../components/github/list-github/list-github.component';
import { FormsModule } from '@angular/forms';
import { SkeletonCardComponent } from '../../components/shared/skeleton-card/skeleton-card.component';
import { LoadingComponent } from '../../components/shared/loading/loading.component';

@Component({
  selector: 'app-github',
  imports: [
    ListGithubComponent,
    FormsModule,
    SkeletonCardComponent,
    LoadingComponent,
  ],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  users: User[] = [];
  search = '';
  isVisible = false;

  githubApiService = inject(GithubApiService);

  ngOnInit() {
    console.log('ngOnInit');
    this.getUsers();
  }

  getUsers() {
    this.githubApiService.getAllUser().subscribe({
      next: (res: User[]) => {
        this.users = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  searchUsers() {
    if (this.search.trim() === '') {
      this.getUsers();
      return;
    }

    this.githubApiService.searchUser(this.search).subscribe({
      next: (res: User[]) => {
        this.users = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  show() {
    this.isVisible = true;
  }
}
