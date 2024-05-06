import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { SignUpDTO } from '../auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers() {
    const res = await this.prismaService.user.findMany();
    return res;
  }

  async getUserByUsername(username: string) {
    const res = await this.prismaService.user.findUnique({
      where: { username },
    });
    return res;
  }

  async createUser(body: SignUpDTO) {
    const res = await this.prismaService.user.create({
      data: { ...body },
    });
    return res;
  }

  async updateUser(username: string, body: any) {
    const user = await this.getUserByUsername(username);
    if (user) {
      const res = await this.prismaService.user.update({
        where: { id: user.id },
        data: { ...body },
      });
      return res;
    }
    return null;
  }
}
