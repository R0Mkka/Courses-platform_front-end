import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputComponent } from './custom-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomInputComponent
  ],
  exports: [
    CustomInputComponent
  ]
})
export class CustomInputModule { }
