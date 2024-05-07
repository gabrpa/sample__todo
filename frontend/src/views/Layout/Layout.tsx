import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { getUser } from "../../features/user/api";
import { useCreateTodo } from "./hooks/useCreateTodo";
import TodoDialog from "../../components/TodoDialog";
import { todoCreateSchema } from "../../features/todo/yup.schema";

export const Layout = () => {
  const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  const { data: user } = useSWR(
    username !== undefined && ["GET_USER", username],
    () => getUser(username)
  );

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/auth");
  };

  const {
    openCreateTodo,
    handleOpenCreateTodoDialog,
    handleCloseCreateTodoDialog,
    handleCreateTodo,
  } = useCreateTodo();

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid container item paddingBottom={5}>
          <AppBar
            position="static"
            elevation={0}
            sx={{ backgroundColor: "black" }}
          >
            <Toolbar>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item>
                  {user && (
                    <Typography variant="h6">{`Welcome, ${user.firstName} ${user.lastName}!`}</Typography>
                  )}
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
        </Grid>
        <Outlet />
      </Grid>

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
