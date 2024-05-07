import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../features/user/interface";
import TodoDialog from "../../../../components/TodoDialog";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { todoCreateSchema } from "../../../../features/todo/yup.schema";

interface ITodoHeaderProps {
  user: IUser;
  handleLogout: () => void;
}

export const TodoHeader = (props: ITodoHeaderProps) => {
  const navigate = useNavigate();
  const { user, handleLogout } = props;
  const {
    openCreateTodo,
    handleOpenCreateTodoDialog,
    handleCloseCreateTodoDialog,
    handleCreateTodo,
  } = useCreateTodo();

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography variant="h6">{`Welcome, ${user.firstName} ${user.lastName}!`}</Typography>
            </Grid>
            <Grid item>
              <ButtonBase onClick={handleOpenCreateTodoDialog}>
                <Typography variant="h4">+</Typography>
              </ButtonBase>
            </Grid>
            <Box display={"flex"} gap={1}>
              <Grid item>
                <Button
                  sx={{ fontWeight: "bold", color: "white" }}
                  variant="text"
                  onClick={() => navigate("/home/todos")}
                >
                  TODOS
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{ fontWeight: "bold", color: "white" }}
                  onClick={() => navigate("/home/profile/")}
                >
                  Profile
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{ fontWeight: "bold", color: "white" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>

      <TodoDialog
        open={openCreateTodo}
        title="Create Todo"
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
        schema={todoCreateSchema}
        onSubmit={handleCreateTodo}
        onClose={handleCloseCreateTodoDialog}
      />
    </>
  );
};
