import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public logout(): void {
    window.localStorage.removeItem('mean-token');

    this.token = '';
    this.router.navigateByUrl('/');
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }

    return this.token;
  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);

    this.token = token;
  }
}
