import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'ar-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public submit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
      .subscribe(value => console.log(value));
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
