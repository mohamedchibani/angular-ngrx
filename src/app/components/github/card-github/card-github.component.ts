import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-card-github',
  imports: [],
  templateUrl: './card-github.component.html',
  styleUrl: './card-github.component.css',
})
export class CardGithubComponent {
  @Input({ required: true }) user!: User;
}
