import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';

import { ITokenResponse } from 'app/models/auth.models';

@Component({
  selector: 'ar-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required] ],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }
}
