import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { CreateTodoDTO, UpdateTodoDTO } from './dto/todo.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class TodoService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async getTodos(username: string) {
    const res = await this.prismaService.todo.findMany({
      where: { user: { username } },
    });
    return res;
  }

  async getTodo(id: number) {
    const res = await this.prismaService.todo.findUnique({
      where: { id },
    });
    return res;
  }

  async createTodo(username: string, body: CreateTodoDTO) {
    const user = await this.userService.getUserByUsername(username);

    if (user) {
      const res = await this.prismaService.todo.create({
        data: { ...body, userId: user.id },
      });
      return res;
    }
    return null;
  }
  async updateTodo(id: number, body: UpdateTodoDTO) {
    const res = await this.prismaService.todo.update({
      where: { id },
      data: { ...body },
    });
    return res;
  }

  async deleteTodo(id: number) {
    const res = await this.prismaService.todo.delete({ where: { id } });
    return res;
  }
}
