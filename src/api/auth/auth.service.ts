import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { AuthDTO, SignInDTO, SignUpDTO } from './dto/auth.dto';
import { UserDTO } from '../user/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import SALT_ROUNDS from 'src/security/bcrypt.constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: SignUpDTO) {
    const { username, password, ...rest } = body;
    const emailExists = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (emailExists) {
      throw new ConflictException();
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return this.prismaService.user.create({
      data: {
        username,
        password: hashedPassword,
        ...rest,
      },
    });
  }

  async login(user: UserDTO) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
        expiresIn: '60m',
      }),
    };
  }

  async validateUser(
    username: SignInDTO['username'],
    password: SignInDTO['password'],
  ): Promise<Omit<AuthDTO, 'password'> | null> {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }
}
