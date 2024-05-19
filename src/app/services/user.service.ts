import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedInUser, Login, Register } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  login = (endpoint: string, body: Login): Observable<LoggedInUser> => {
    return this.apiService.post(endpoint, body, {});
  };

  register = (endpoint: string, body: Register): Observable<Register> => {
    return this.apiService.post(endpoint, body, {});
  };

  logout = (endpoint: string) => {
    return this.apiService.post(endpoint, {}, {});
  };
}
