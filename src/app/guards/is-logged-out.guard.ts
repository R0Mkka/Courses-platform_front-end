import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedOutGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigateByUrl('/profile');

      return false;
    }

    return true;
  }
}
