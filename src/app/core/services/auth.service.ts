import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { LocalStorageService, LocalStorageItems } from 'app/core/services/local-storage.service';
import { UserStateService } from 'app/core/services/user-state.service';

import { ITokenResponse, IUserLoginInfo } from 'app/models/auth.models';
import { IUser, INoPasswordUser, UserStates } from 'app/models/user.models';
import { URLS } from 'app/utils/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private userStateService: UserStateService
  ) { }

  public login(user: IUserLoginInfo): Observable<ITokenResponse> {
    return this.httpService.post<IUserLoginInfo, ITokenResponse>(URLS.LOGIN_USER, user).pipe(
      map((data: ITokenResponse) => {
        if (!!data.token) {
          this.saveToken(data.token);
          this.setCurrentUserInfo();
        }

        return data;
      })
    );
  }

  public logout(): void {
    this.localStorageService.remove(LocalStorageItems.Token);
    this.localStorageService.remove(LocalStorageItems.User);

    this.userStateService.setState(UserStates.LoggedOut);

    this.token = '';
    this.router.navigateByUrl('/login');
  }

  public register(user: IUser): Observable<ITokenResponse> {
    return this.httpService.post<IUser, ITokenResponse>(URLS.REGISTER_USER, user);
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

  private setCurrentUserInfo(): void {
    this.httpService.get<IUser>(
      URLS.CURRENT_USER,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        })
      }
    ).subscribe((user: IUser) => {
      const safeCopy: INoPasswordUser = Object.keys(user).reduce((previous, current) => {
        if (current === 'password') {
          return { ...previous };
        }

        return { ...previous, [current]: user[current] };
      }, {}) as INoPasswordUser;

      this.localStorageService.set(LocalStorageItems.User, JSON.stringify(safeCopy));
      this.userStateService.setState(UserStates.LoggedIn);
    });
  }

  private getToken(): string {
    if (!this.token) {
      this.token = this.localStorageService.get(LocalStorageItems.Token);
    }

    return this.token;
  }

  private saveToken(token: string): void {
    this.localStorageService.set(LocalStorageItems.Token, token);

    this.token = token;
  }
}
