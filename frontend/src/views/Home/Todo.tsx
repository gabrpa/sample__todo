import { Grid } from "@mui/material";
import { TodoList } from "./components/TodoList/TodoList";
import useSWR from 'swr'
import { getTodos } from "../../features/todo/api";
import { ITodos } from "../../features/todo/interface";

export const Todo = () => {
  const username = sessionStorage.getItem('username');
  const { data: todos = [] } = useSWR<ITodos>(username !== undefined && ['getTodos', username], async () => getTodos(username!))

  return (
    <Grid container>
      <TodoList todos={todos} />
    </Grid>
  );
};