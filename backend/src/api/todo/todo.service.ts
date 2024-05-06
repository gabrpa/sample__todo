import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { CreateTodoDTO, UpdateTodoDTO } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

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

  async createTodo(body: CreateTodoDTO) {
    const res = await this.prismaService.todo.create({
      data: { ...body },
    });
    return res;
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
