import { Validators } from '@angular/forms';

import { ICustomField, FieldTypes } from 'app/models/forms.models';

export const loginFormConfig: ICustomField[] = [
  {
    label: 'Email',
    id: 'email',
    controlName: 'email',
    inputName: 'email',
    placeholder: 'Введите email',
    type: FieldTypes.Email,
    readonly: false,
    required: true,
    validators: [
      Validators.required,
      Validators.email,
      Validators.maxLength(50)
    ]
  },
  {
    label: 'Пароль',
    id: 'password',
    controlName: 'password',
    inputName: 'password',
    placeholder: 'Введите пароль',
    type: FieldTypes.Password,
    readonly: false,
    required: true,
    validators: [
      Validators.required,
      // Validators.minLength(4)
    ]
  }
];
