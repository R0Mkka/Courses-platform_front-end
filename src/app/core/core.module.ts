import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from 'app/components/header/header.component';
import { FooterComponent } from 'app/components/footer/footer.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';

import { CustomInputModule } from 'app/shared/custom-input/custom-input.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomInputModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomInputModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
})
export class CoreModule { }
