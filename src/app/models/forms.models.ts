import { AbstractControl, ValidationErrors } from '@angular/forms';

type ValidationFunction = (control: AbstractControl) => ValidationErrors | null;

export enum FieldTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Number = 'Number',
  File = 'file'
}

export interface ICustomField {
  id: string;
  controlName: string;
  inputName: string;
  label: string;
  type: FieldTypes;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  validators: ValidationFunction[];
  initialValue?: string;
  error?: string;
}
