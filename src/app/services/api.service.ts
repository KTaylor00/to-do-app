import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

const apiUrl: string = 'https://localhost:7229';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(`${apiUrl}${endpoint}`, {
      ...options,
      withCredentials: true,
    }) as Observable<T>;
  }

  post<T>(endpoint: string, body: any | null, options: Options): Observable<T> {
    return this.httpClient.post<T>(`${apiUrl}${endpoint}`, body, {
      ...options,
      withCredentials: true,
    }) as Observable<T>;
  }

  put<T>(endpoint: string, body: any | null, options: Options): Observable<T> {
    return this.httpClient.put<T>(`${apiUrl}${endpoint}`, body, {
      ...options,
      withCredentials: true,
    }) as Observable<T>;
  }

  delete<T>(endpoint: string, options: Options): Observable<T> {
    return this.httpClient.delete<T>(`${apiUrl}${endpoint}`, {
      ...options,
      withCredentials: true,
    }) as Observable<T>;
  }
}
