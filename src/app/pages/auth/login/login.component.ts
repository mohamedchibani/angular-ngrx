import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMessage = '';
  authService = inject(AuthService);
  router = inject(Router);

  loginForm!: FormGroup;

  store = inject(Store);

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
      ]),
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.store.dispatch(login({ username, password }));

    // this.errorMessage = '';
    // this.authService.login(username, password).subscribe({
    //   next: (res) => this.router.navigate(['/blog']),
    //   error: (_) => {
    //     this.errorMessage = 'Username or password is wrong';
    //     this.loginForm.reset();
    //   },
    // });
  }
}
