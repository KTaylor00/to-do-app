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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const username: string | null | undefined =
        this.registerForm.value.username;
      const name: string | null | undefined = this.registerForm.value.name;
      const surname: string | null | undefined =
        this.registerForm.value.surname;
      const password: string | null | undefined =
        this.registerForm.value.password;

      this.userService
        .register('/users/register', { username, name, surname, password })
        .subscribe({
          next: () => {
            this.router.navigateByUrl('');
          },
          error: (error) => console.log(error),
        });
    }
  }
}
