export interface RegisterDto {
  username: string;
  email: string;
  type: 'user' | 'admin';
  password: string;
}
export interface LoginDto {
  email: string;
  password: string;
}
