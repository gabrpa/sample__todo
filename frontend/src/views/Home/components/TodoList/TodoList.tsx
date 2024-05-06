import {
    Box,
  Grid,
  Typography,
} from "@mui/material";
import { ITodos } from "../../../../features/todo/interface";
import { TodoCard } from "../TodoCard/TodoCard";

interface ITodoListProps {
  todos: ITodos;
}

export const TodoList = (props: ITodoListProps) => {
  const { todos } = props;

  const handleEditTodo = () => {
    console.log("Edit");
  };

  const handledeleteTodo = () => {
    console.log("Delete");
  };

  if (!todos) {
    return <Typography>There is no created Todos</Typography>;
  }

  return (
      <Grid container justifyContent={'center'}>
          {todos.map((todo) => (
            <Box padding={2} key={todo.id}>
                <TodoCard todo={todo} onEdit={handleEditTodo} onDelete={handledeleteTodo}/>
            </Box>
          ))}
      </Grid>
  );
};
