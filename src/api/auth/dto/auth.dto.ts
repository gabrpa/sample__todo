import { User } from '@prisma/client';

export class AuthDTO implements User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export class SignInDTO implements Pick<User, 'username' | 'password'> {
  username: string;
  password: string;
}

export class SignUpDTO implements Omit<AuthDTO, 'id'> {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}
