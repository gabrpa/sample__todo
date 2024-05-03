import { User } from '@prisma/client/';

export class UserDTO implements Omit<User, 'password'> {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}
