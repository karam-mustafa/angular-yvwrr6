import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto, RegisterDto } from './dtos/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  register(user: RegisterDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/register`, user);
  }
  
  login(data: LoginDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/login`, data);
  }
}
