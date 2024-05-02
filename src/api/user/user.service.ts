import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers() {
    const res = await this.prismaService.user.findMany();
    return res;
  }

  async getUser(id: number) {
    const res = await this.prismaService.user.findUnique({
      where: { id },
    });
    return res;
  }

  async updateUser(id: number, body: any) {
    const res = await this.prismaService.user.update({
      where: { id },
      data: { ...body },
    });
    return res;
  }
}
