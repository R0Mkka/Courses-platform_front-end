import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';

import { ICustomField } from 'app/models/forms.models';
import { loginFormConfig } from './login.config';

@Component({
  selector: 'ar-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginFormConfig: ICustomField[] = loginFormConfig;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(
          () => this.router.navigateByUrl('/'),
          (error) => console.log(error)
        );
    } else {
      for (const controlName of Object.keys(this.loginForm.controls)) {
        if (!!this.loginForm.get(controlName).errors) {
          this.loginFormConfig.find((field: ICustomField) => field.controlName === controlName).error = 'Ошибка!';
        }
      }
    }
  }

  public onFocus(id: string): void {
    this.loginFormConfig.find((field: ICustomField) => field.id === id).error = null;
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group(
      this.loginFormConfig.reduce((accumulator, current) => ({
        ...accumulator,
        [current.controlName]: [ current.initialValue || '', current.validators ]
      }), {})
    );

    this.loginForm.valueChanges.subscribe(value => console.log(value));
  }
}
