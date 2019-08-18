export enum Roles {
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student'
}

export interface ILogInUser {
  email: string;
  password: string;
}

export interface INoPasswordUser {
  firstName: string;
  lastName: string;
  email: string;
  courses: string[];
  registrationDate: string;
  role: Roles;
}

export interface IUser extends INoPasswordUser {
  password: string;
}

export enum UserStates {
  LoggedOut = 0,
  LoggedIn = 1
}
