import { Routes } from '@angular/router';
import { RegisterComponent } from './routes/register/register.component';
import { TasksComponent } from './routes/tasks/tasks.component';
import { LoginComponent } from './routes/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [authGuard],
  },
];
