import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TodoDialog from "../../../../components/TodoDialog";
import { ITodos } from "../../../../features/todo/interface";

interface ITodoListProps {
  todos: ITodos;
}

export const TodoList = (props: ITodoListProps) => {
  const { todos } = props;
  const [openEditTodoDialog, setOpenEditTodoDialog] = useState(false);
  const [openDeleteTodoDialog, setOpenDeleteTodoDialog] = useState(false);

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
    <>
      <Grid container xs={10}>
        <Grid container>
          {todos.map((todo) => (
            <Card key={todo.id}>
              <CardHeader title={todo.title} />
              <CardContent>
                <Typography>{todo.description}</Typography>
                {/* {todo.date} */}
                <Checkbox checked={todo.completed} />
              </CardContent>
              <CardActions>
                <Button onClick={() => setOpenEditTodoDialog(true)}>Edit</Button>
                <Button onClick={() => setOpenDeleteTodoDialog(true)}>Delete</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>

      <TodoDialog
        open={openEditTodoDialog}
        title="Edit Todo"
        onSubmit={() => handleEditTodo()}
        onClose={() => setOpenEditTodoDialog(false)}
      />
      <TodoDialog
        open={openDeleteTodoDialog}
        title="Delete Todo"
        description="Are you sure you want to delete this todo?"
        onSubmit={() => handledeleteTodo()}
        onClose={() => setOpenDeleteTodoDialog(false)}
      />
    </>
  );
};
