export interface ILogInUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  fullName: string;
  email: string;
  password: string;
}

export enum Roles {
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student'
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
}
