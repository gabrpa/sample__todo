import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserDTO } from '../user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user as UserDTO);
  }

  @Post('register')
  async register(@Body() body: SignUpDTO) {
    const res = await this.authService.register(body);
    return res;
  }
}
