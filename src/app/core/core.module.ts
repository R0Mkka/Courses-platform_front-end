import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginComponent,
    RegisterComponent
  ],
})
export class CoreModule { }
