import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from 'app/core/services/auth.service';

import { IUser } from 'app/models/user.models';

@Component({
  selector: 'ar-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public user: IUser;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;

      console.log(this.user);
    });
  }
}
