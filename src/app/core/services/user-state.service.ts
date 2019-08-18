import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { UserStates } from 'app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  public userState$ = new Subject<UserStates>();

  public setState(state: UserStates): void {
    this.userState$.next(state);
  }
}
