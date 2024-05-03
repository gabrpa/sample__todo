import { Todo } from '@prisma/client';

export class TodoDTO implements Todo {
  id: number;
  title: string;
  description: string;
  date: Date | null;
  completed: boolean;
  userId: number;
}

export class CreateTodoDTO
  implements Omit<TodoDTO, 'id' | 'date' | 'completed'>
{
  title: string;
  description: string;
  date?: Date;
  completed?: boolean;
  userId: number;
}

export class UpdateTodoDTO implements Partial<TodoDTO> {}
