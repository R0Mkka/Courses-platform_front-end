import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'app/core/services/auth.service';
import { UserStateService } from 'app/core/services/user-state.service';
import { LocalStorageService, LocalStorageItems } from 'app/core/services/local-storage.service';

import { UserStates, INoPasswordUser } from 'app/models/user.models';
import { AutoUnsubscribe } from 'app/utils/auto-unsubscribe';

@Component({
  selector: 'ar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@AutoUnsubscribe()
export class HeaderComponent implements OnInit {
  public user: INoPasswordUser;

  private userStateSub$: Subscription;

  public get isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  constructor(
    public authService: AuthService,
    private userStateService: UserStateService,
    private localStorageService: LocalStorageService,
    private cdRef: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    if (this.isLoggedIn) {
      this.setUser();
    }

    this.subscribeOnUserStateChanges();
  }

  private setUser(): void {
    this.user = this.localStorageService.getAsObject<INoPasswordUser>(LocalStorageItems.User);

    this.cdRef.markForCheck();
  }

  private subscribeOnUserStateChanges(): void {
    this.userStateSub$ = this.userStateService.userState$
      .subscribe((state: UserStates) => {
        if (state === UserStates.LoggedIn) {
          this.setUser();
        }
      });
  }
}
