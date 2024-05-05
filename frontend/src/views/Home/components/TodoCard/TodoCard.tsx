import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { ITodo } from "../../../../features/todo/interface";
import { useState } from "react";
import TodoDialog from "../../../../components/TodoDialog";
import { todoDeleteSchema, todoUpdateSchema } from "../../../../features/todo/yup.schema";

interface ITodoCardProps {
  todo: ITodo;
  onEdit: () => unknown;
  onDelete: () => unknown;
}

export const TodoCard = (props: ITodoCardProps) => {
  const { todo, onEdit, onDelete } = props;
  const [openEditTodoDialog, setOpenEditTodoDialog] = useState(false);
  const [openDeleteTodoDialog, setOpenDeleteTodoDialog] = useState(false);

  return (
    <>
      <Card key={todo.id} sx={{ width: "250px", height: "270px" }}>
        <CardActionArea>
          <Box paddingTop={1} textAlign={"center"}>
            <Typography fontWeight={"bold"} variant="h6">
              {todo.title}
            </Typography>
          </Box>
          <CardContent sx={{ lineBreak: "anywhere", height: "50%" }}>
            <Box paddingBottom={1}>
              <TextField
                disabled={true}
                multiline={true}
                rows={3}
                fullWidth
                defaultValue={todo.description}
              />
            </Box>
            <Box>
              <TextField disabled={true} type="date" size="small" />
            </Box>
            {/* {todo.date} */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={() => setOpenEditTodoDialog(true)}>
            Edit
          </Button>
          <Button size="small" onClick={() => setOpenDeleteTodoDialog(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <TodoDialog
        open={openEditTodoDialog}
        title="Edit Todo"
        schema={todoUpdateSchema}
        onSubmit={onEdit}
        onClose={() => setOpenEditTodoDialog(false)}
      />
      <TodoDialog
        open={openDeleteTodoDialog}
        title="Delete Todo"
        description="Are you sure you want to delete this todo?"
        schema={todoDeleteSchema}
        onSubmit={onDelete}
        onClose={() => setOpenDeleteTodoDialog(false)}
      />
    </>
  );
};
