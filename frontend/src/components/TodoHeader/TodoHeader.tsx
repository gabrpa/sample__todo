import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoDialog from "../TodoDialog";
import { todoCreateSchema } from "../../features/todo/yup.schema";
import { IUser } from "../../features/user/interface";
import { ITodoCreate } from "../../features/todo/interface";
import { createTodo } from "../../features/todo/api";
import { UseFormReset } from "react-hook-form";

interface ITodoHeaderProps {
  user: IUser
}

export const TodoHeader = (props: ITodoHeaderProps) => {
  const { user } = props;
  const [openCreateTodo, setOpenCreateTodo] = useState(false);
  const navigate = useNavigate();

  const handleCreateTodo = async (data: ITodoCreate, reset: UseFormReset<ITodoCreate>) => {
    await createTodo(data);
    setOpenCreateTodo(false);
    reset();
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('auth')
  }

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={3}>
              <Typography variant="h6">{`Welcome, ${user.firstName} ${user.lastName}!`}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Button
                sx={{ fontWeight: 'bold', color: 'white'}}
                variant="text"
                onClick={async () => {
                  await navigate("/home/todos");
                  setOpenCreateTodo(true);
                }}
              >
                + TODO
              </Button>
            </Grid>
            <Box display={"flex"} gap={1}>
              <Grid item>
                <Button 
                  sx={{ fontWeight: 'bold', color: 'white'}}
                  onClick={() => navigate("/home/profile")}
                  >Profile</Button>
              </Grid>
              <Grid item>
                <Button
                sx={{ fontWeight: 'bold', color: 'white'}}
                onClick={handleLogout}
                >Logout</Button>
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
          {
            label: "Due date",
            name: "date",
            type: "datetime-local",
          },
        ]}
        schema={todoCreateSchema}
        onSubmit={handleCreateTodo}
        onClose={() => setOpenCreateTodo(false)}
      />
    </>
  );
};
