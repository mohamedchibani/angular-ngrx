import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/shared/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-first-project';
}
