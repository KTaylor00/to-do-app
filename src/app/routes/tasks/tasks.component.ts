import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../../types';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(
    private tasksService: TasksService,
    private userService: UserService,
    private router: Router
  ) {}
  task: string = '';
  showAllTasks: boolean = true;
  showPending: boolean = true;
  showCompleted: boolean = true;
  username: string | null = '';

  tasks: Task[] = [];

  getTasks() {
    this.tasksService.getTasks('/to-dos', {}).subscribe((items: Task[]) => {
      this.showAllTasks = true;
      this.showPending = true;
      this.showCompleted = true;
      this.tasks = items;
    });
  }

  addTask(task: string) {
    this.tasksService.addTask('/to-dos', { task }).subscribe({
      next: () => {
        this.task = '';
        this.getTasks();
      },
      error: (error) => console.log(error),
    });
  }

  updateTasks(): void {
    const tasks: Task[] = this.tasks;
    this.tasksService.updateTasks('/to-dos', tasks).subscribe({
      next: () => {
        if (this.showAllTasks) {
          this.getTasks();
        }

        if (this.showPending) {
          this.tasks = this.tasks.filter((i) => i.is_Completed === false);
        }

        if (this.showCompleted) {
          this.tasks = this.tasks.filter((i) => i.is_Completed === true);
        }
      },
      error: (error) => console.log(error),
    });
  }

  deleteTask(taskId: number): void {
    this.tasksService.deleteTask(`/to-dos?id=${taskId}`, {}).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((i) => i.id !== taskId);
      },
      error: (error) => console.log(error),
    });
  }

  filterCompletedTasks() {
    this.showAllTasks = false;
    this.showPending = false;
    this.tasks = this.tasks.filter((i) => i.is_Completed === true);
  }

  filterPendingTasks() {
    this.showAllTasks = false;
    this.showCompleted = false;
    this.tasks = this.tasks.filter((i) => i.is_Completed === false);
  }

  logoutUser() {
    this.userService.logout('/users/logout').subscribe({
      next: () => {
        localStorage.clear();
        this.router.navigateByUrl('');
      },
      error: (error) => console.log(error),
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.getTasks();
  }
}
