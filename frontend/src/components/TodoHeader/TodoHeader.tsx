import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TodoDialog from "../TodoDialog";

export const TodoHeader = () => {
  const [openCreateTodo, setOpenCreateTodo] = useState(false);
  const navigate = useNavigate();

  const handleCreateTodo = () => {
    return
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
              <Typography>Welcome, Gabriel</Typography>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="text"
                color="error"
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
                <Link to={"/home/profile"}>Profile</Link>
              </Grid>
              <Grid item>
                <ButtonBase>Logout</ButtonBase>
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
            name: "name",
            required: true,
          },
          {
            label: "Description",
            name: "description",
            required: true,
          },
          {
            label: "Due date",
            name: "dueDate",
            type: "datetime-local",
          },
        ]}
        onSubmit={() => handleCreateTodo()}
        onClose={() => setOpenCreateTodo(false)}
      />
    </>
  );
};
