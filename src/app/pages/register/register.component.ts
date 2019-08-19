import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';

import { ITokenResponse } from 'app/models/auth.models';
import { ICustomField } from 'app/models/forms.models';
import { registerFormConfig } from './register.config';

@Component({
  selector: 'ar-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public registerFormConfig: ICustomField[] = registerFormConfig;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe((data: ITokenResponse) => {
          if (!!data.token) {
            this.router.navigateByUrl('/login');
          }
        });
    } else {
      console.error('Form invalid!');
    }
  }

  private initForm(): void {
    this.registerForm = this.formBuilder.group(
      this.registerFormConfig.reduce((accumulator, current) => ({
        ...accumulator,
        [current.controlName]: [ current.initialValue || '', current.validators ]
      }), {})
    );
  }
}
