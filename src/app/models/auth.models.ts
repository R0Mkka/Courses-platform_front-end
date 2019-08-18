export interface IUserLoginInfo {
  email: string;
  password: string;
}

export interface ITokenResponse {
  token?: string;
  error?: string;
}
