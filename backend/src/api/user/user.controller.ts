import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get/:username')
  async getUser(@Param('username') username: string) {
    return await this.userService.getUserByUsername(username);
  }

  @Put('update/:username')
  async updateUser(@Param('username') username: string, @Body() body: any) {
    return await this.userService.updateUser(username, body);
  }
}
