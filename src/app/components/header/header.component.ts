import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from 'app/core/services/auth.service';
@Component({
  selector: 'ar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  public get isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
