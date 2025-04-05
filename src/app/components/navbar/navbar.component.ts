import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  counterService = inject(CounterService);
  authService = inject(AuthService);
}
