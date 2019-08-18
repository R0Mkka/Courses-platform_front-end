import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LocalStorageService, LocalStorageItems } from 'app/core/services/local-storage.service';

import { IUser } from 'app/models/user.models';

@Component({
  selector: 'ar-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public user: IUser;

  constructor(private localStorageService: LocalStorageService) { }

  public ngOnInit(): void {
    if (this.localStorageService.has(LocalStorageItems.User)) {
      this.user = JSON.parse(this.localStorageService.get(LocalStorageItems.User));
    } else {
      console.log('no user');
    }
  }
}
