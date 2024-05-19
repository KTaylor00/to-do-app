import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTask, Params, Task } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private apiService: ApiService) {}

  getTasks = (endpoint: string, params: Params): Observable<Task[]> => {
    return this.apiService.get(endpoint, params);
  };

  addTask = (endpoint: string, body: AddTask): Observable<AddTask> => {
    return this.apiService.post(endpoint, body, {});
  };

  updateTasks = (endpoint: string, body: Task[]): Observable<Task[]> => {
    return this.apiService.put(endpoint, body, {});
  };

  deleteTask = (endpoint: string, params: Params): Observable<Task> => {
    return this.apiService.delete(endpoint, params);
  };
}
