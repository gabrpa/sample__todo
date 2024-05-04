import { Grid } from "@mui/material"
import { TodoList } from "./components/TodoList/TodoList"

export const Todo = () => {

    const todo = [{
        title: "FirstTodo",
        description: "My Description",
        completed: true
    }]

    return (<Grid container justifyContent={'center'}>
        <TodoList data={todo}/>
    </Grid>)
}