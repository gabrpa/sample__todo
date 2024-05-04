import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, Grid, Typography } from "@mui/material";

interface ITodoListProps {
    data: any[];
}

export const TodoList = (props: ITodoListProps) => {
    const { data } = props;

    if (!data) {
        return <Typography>There is no created Todos</Typography>
    }
    
    return(
    <Grid container xs={10}>
        <Grid container>
            {data.map((todo) => (
                <Card key={todo.id} >
                    <CardHeader title={todo.title}/>
                    <CardContent>
                        <Typography>{todo.description}</Typography>
                        {todo.date}
                        <Checkbox checked={todo.completed}/>
                    </CardContent>
                    <CardActions>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </CardActions>
                </Card>
            ) )}
        </Grid>
    </Grid>)
}