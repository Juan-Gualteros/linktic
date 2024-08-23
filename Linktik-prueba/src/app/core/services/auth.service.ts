import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl: string
private apiUrl: string
private loggedIn = false;
private tokenKey = 'authToken';
  constructor(private http: HttpClient, private router: Router) {
    this.appUrl = environment.apiUrl;
    this.apiUrl = 'auth'
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return !!this.getToken();
    }
    return false;
  }

  setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
  }
  signIn(user: User): Observable<any> {
    return this.http.post(`${this.appUrl}${this.apiUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<{ token: string }>(`${this.appUrl}${this.apiUrl}/login`, user).pipe(
      tap(response => {
        if (typeof window !== 'undefined') {
          this.setToken(response.token);
          this.router.navigate(['/list']);
        }
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
    }
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
