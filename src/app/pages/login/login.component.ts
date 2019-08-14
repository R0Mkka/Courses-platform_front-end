import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'ar-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UserService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    this.usersService.login(this.loginForm.value)
      .subscribe(value => console.log(value));
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
}
