import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'ar-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    this.authService.login(this.loginForm.value)
      .subscribe(
        () => this.router.navigateByUrl('/profile'),
        (error) => console.log(error)
      );
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
}
