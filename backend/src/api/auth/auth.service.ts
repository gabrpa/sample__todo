import { ConflictException, Injectable } from '@nestjs/common';
import { AuthDTO, SignInDTO, SignUpDTO } from './dto/auth.dto';
import { UserDTO } from '../user/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { jwtConstants } from './constants';
import SALT_ROUNDS from 'src/security/bcrypt.constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: SignUpDTO) {
    const { username, password, ...rest } = body;
    const isUsernameTaken = await this.userService.getUserByUsername(username);
    if (isUsernameTaken) {
      throw new ConflictException();
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return this.userService.createUser({
      username,
      password: hashedPassword,
      ...rest,
    });
  }

  async login(user: UserDTO) {
    const payload = { username: user.username, sub: user.id };
    return {
      username: user.username,
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
        expiresIn: '99999m',
      }),
    };
  }

  async validateUser(
    username: SignInDTO['username'],
    password: SignInDTO['password'],
  ): Promise<Omit<AuthDTO, 'password'> | null> {
    const user = await this.userService.getUserByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }
}
