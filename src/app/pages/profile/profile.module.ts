import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './component/profile.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    CoursesComponent
  ],
  exports: [ ]
})
export class ProfileModule { }
