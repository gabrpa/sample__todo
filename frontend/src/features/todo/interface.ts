export interface ITodo {
  id: number;
  title: string;
  description: string;
  date?: Date;
  completed?: boolean;
}

export type ITodos = ITodo[];

export interface ITodoCreate extends Omit<ITodo, "id" | 'completed'> {}

export interface ITodoUpdate extends Partial<ITodo> {
  id: number;
  title: string;
  description: string;
}

export interface ITodoDelete extends Pick<ITodo, "id"> {}
