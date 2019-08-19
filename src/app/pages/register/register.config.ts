import { Validators } from '@angular/forms';

import { ICustomField, FieldTypes } from 'app/models/forms.models';

export const registerFormConfig: ICustomField[] = [
  {
    label: 'Имя',
    id: 'firstName',
    controlName: 'firstName',
    inputName: 'firstName',
    placeholder: 'Введите имя',
    type: FieldTypes.Text,
    readonly: false,
    required: true,
    validators: [
      Validators.required,
      Validators.maxLength(20)
    ]
  },
  {
    label: 'Фамилия',
    id: 'lastName',
    controlName: 'lastName',
    inputName: 'lastName',
    placeholder: 'Введите фамилию',
    type: FieldTypes.Text,
    readonly: false,
    required: true,
    validators: [
      Validators.required,
      Validators.maxLength(25)
    ]
  },
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
  },
  {
    label: 'Регистрируюсь как',
    id: 'role',
    controlName: 'role',
    inputName: 'role',
    placeholder: 'Выберите роль',
    type: FieldTypes.Text,
    readonly: false,
    required: true,
    validators: [
      Validators.required
    ]
  }
];
