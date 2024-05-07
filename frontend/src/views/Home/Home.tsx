import { Box, Grid, Typography } from "@mui/material";
import useSWR from "swr";
import { getTodos, updateTodo } from "../../features/todo/api";
import { ITodoUpdate, ITodos } from "../../features/todo/interface";
import TodoTitle from "../../components/TodoTitle";
import { TodoCard } from "./components/TodoCard/TodoCard";
import TodoDialog from "../../components/TodoDialog";
import {
  todoDeleteSchema,
  todoUpdateSchema,
} from "../../features/todo/yup.schema";
import { useEditTodo } from "./hooks/useEditTodo";
import { useDeleteTodo } from "./hooks/useDeleteTodo";

export const Home = () => {
  const username = sessionStorage.getItem("username");
  const { data: todos = [], mutate } = useSWR<ITodos>(
    username !== undefined && ["getTodos", username],
    async () => getTodos(username!)
  );

  const handleEditTodo = async (id: number, data: ITodoUpdate) => {
    await updateTodo(id, data);
    await mutate();
    handleCloseEditTodoDialog();
  };

  const handleDeleteTodo = (id: number) => {
    console.log(id);
  };

  const {
    selectedTodo,
    openEditTodoDialog,
    handleOpenEditTodoDialog,
    handleCloseEditTodoDialog,
    _handleEditTodo,
  } = useEditTodo({ handleEditTodo });

  const {
    openDeleteTodoDialog,
    handleOpenDeleteTodoDialog,
    handleCloseDeleteTodoDialog,
    _handleDeleteTodo,
  } = useDeleteTodo({ handleDeleteTodo });

  if (!todos) {
    return <Typography>There is no Todos</Typography>;
  }

  return (
    <>
      <Grid container justifyContent={"center"}>
        <TodoTitle title="Todo List" />
        {todos.map((todo) => (
          <Box padding={2} key={todo.id}>
            <TodoCard
              todo={todo}
              onEdit={handleOpenEditTodoDialog}
              onDelete={handleOpenDeleteTodoDialog}
            />
          </Box>
        ))}
      </Grid>

      {selectedTodo && (
        <TodoDialog
          open={openEditTodoDialog}
          title="Edit Todo"
          defaultValues={selectedTodo}
          textfield={[
            {
              label: "Title",
              name: "title",
              required: true,
            },
            {
              label: "Description",
              name: "description",
              required: true,
            },
          ]}
          datetime={[
            {
              label: "Duedate",
              name: "date",
            },
          ]}
          schema={todoUpdateSchema}
          onSubmit={_handleEditTodo}
          onClose={handleCloseEditTodoDialog}
        />
      )}
      <TodoDialog
        open={openDeleteTodoDialog}
        title="Delete Todo"
        description="Are you sure you want to delete this todo?"
        schema={todoDeleteSchema}
        onSubmit={_handleDeleteTodo}
        onClose={handleCloseDeleteTodoDialog}
      />
    </>
  );
};
