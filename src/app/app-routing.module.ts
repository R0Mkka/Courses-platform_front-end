import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsLoggedOutGuard } from './guards/is-logged-out.guard';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'login',
    canActivate: [ IsLoggedOutGuard ],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [ IsLoggedOutGuard ],
    component: RegisterComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
