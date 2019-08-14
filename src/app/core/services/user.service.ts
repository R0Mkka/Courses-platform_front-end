import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

import { IUser } from 'app/models/user.models';

const API_URL = 'http://localhost:3000/api';
const USERS_API = `${API_URL}/users`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public login(user: IUser): Observable<any> {
    return this.doPost<IUser>(`${USERS_API}/login`, user);
  }

  public register(user: IUser): Observable<any> {
    return this.doPost<IUser>(`${USERS_API}/register`, user);
  }

  public getDetails(): any {
    const token = this.authService.getToken();

    if (!!token) {
      const payload = window.atob(token.split('.')[1]);

      return JSON.parse(payload);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = this.getDetails();

    if (user) {
      return user.exp > Date.now() / 1000;
    }

    return false;
  }

  private doPost<T>(requestedUrl: string, data: T): Observable<any> {
    return this.http.post(requestedUrl, JSON.stringify(data), httpOptions);
  }
}
