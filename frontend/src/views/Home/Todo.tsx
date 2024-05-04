import { Grid } from "@mui/material"
import { TodoList } from "./components/TodoList/TodoList"

export const Todo = () => {

    const todo = [{
        id: 1,
        title: "FirstTodo",
        description: "My Description",
        completed: true
    }]

    return (<Grid container justifyContent={'center'}>
        <TodoList todos={todo}/>
    </Grid>)
}