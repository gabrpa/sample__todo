import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO, UpdateTodoDTO } from './dto/todo.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('get-all/:username')
  async getTodos(@Param('username') username: string) {
    const res = await this.todoService.getTodos(username);
    return res;
  }

  @Get('get/:id')
  async getTodo(@Param('id') id: number) {
    const res = await this.todoService.getTodo(id);
    return res;
  }

  @Post('create/:username')
  async createTodo(
    @Param('username') username: string,
    @Body() body: CreateTodoDTO,
  ) {
    const res = await this.todoService.createTodo(username, body);
    return res;
  }

  @Put('update/:id')
  async updateTodo(@Param('id') id: number, @Body() body: UpdateTodoDTO) {
    const res = await this.todoService.updateTodo(+id, body);
    return res;
  }

  @Delete('delete/:id')
  async deleteTodo(@Param('id') id: number) {
    const res = await this.todoService.deleteTodo(id);
    return res;
  }
}
