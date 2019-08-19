import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    CoursesComponent,
    SettingsComponent
  ],
  exports: [ ]
})
export class ProfileModule { }
