import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LoggedInUser } from '../../../types';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const username: string | null | undefined = this.loginForm.value.username;
      const password: string | null | undefined = this.loginForm.value.password;

      this.userService.login('/users/login', { username, password }).subscribe({
        next: (data: LoggedInUser) => {
          console.log(data);
          localStorage.setItem('loggedIn', 'true');
          // this is just to show the different users for the demo.
          localStorage.setItem(
            'username',
            data.user.username.charAt(0).toUpperCase() +
              data.user.username.slice(1)
          );
          this.router.navigateByUrl('/tasks');
        },
        error: (error) => console.log(error),
      });
    }
  }
}
