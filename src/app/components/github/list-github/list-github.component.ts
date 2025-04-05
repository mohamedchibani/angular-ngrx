import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';
import { CardGithubComponent } from '../card-github/card-github.component';

@Component({
  selector: 'app-list-github',
  imports: [CardGithubComponent],
  templateUrl: './list-github.component.html',
  styleUrl: './list-github.component.css',
})
export class ListGithubComponent {
  @Input({ required: true }) users: User[] = [];
}
