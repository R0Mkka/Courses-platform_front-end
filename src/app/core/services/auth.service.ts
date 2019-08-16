import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { LocalStorageService } from 'app/core/services/local-storage.service';

import { IUser } from 'app/models/user.models';
import { URLS } from 'app/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) { }

  public login(user: IUser): Observable<any> {
    return this.httpService.post<IUser, any>(URLS.LOGIN_USER, user).pipe(
      map(({ token }) => {
        this.saveToken(token);

        return { token };
      })
    );
  }

  public logout(): void {
    this.localStorageService.remove('mean-token');

    this.token = '';
    this.router.navigateByUrl('/');
  }

  public register(user: IUser): Observable<any> {
    return this.httpService.post<IUser, any>(URLS.REGISTER_USER, user);
  }

  public isUserLoggedIn(): boolean {
    const user = this.getUserDetails();

    if (user) {
      return user.exp > Date.now() / 1000;
    }

    return false;
  }

  public getUserDetails(): any {
    const token = this.getToken();

    if (!!token) {
      const payload = window.atob(token.split('.')[1]);

      return JSON.parse(payload);
    }

    return null;
  }

  public getCurrentUser(): Observable<any> {
    return this.httpService.get<IUser>(
      URLS.CURRENT_USER,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    );
  }

  private getToken(): string {
    if (!this.token) {
      this.token = this.localStorageService.get('mean-token');
    }

    return this.token;
  }

  private saveToken(token: string): void {
    this.localStorageService.set('mean-token', token);

    this.token = token;
  }
}
