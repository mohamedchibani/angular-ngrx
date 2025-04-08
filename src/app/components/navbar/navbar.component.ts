import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModel } from '../../store/auth/auth.model';
import { Observable } from 'rxjs';
import {
  selectIsAuthenticated,
  selectUser,
} from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  store = inject(Store);
  user!: Observable<UserModel | null>;
  isAuth!: Observable<boolean>;

  ngOnInit() {
    this.user = this.store.select(selectUser);
    this.isAuth = this.store.select(selectIsAuthenticated);
  }
}
