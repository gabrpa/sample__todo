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

interface ITodoCardProps {
  todo: ITodo;
  onEdit: (todo: ITodo) => void;
  onDelete: (id: number) => void;
}

export const TodoCard = (props: ITodoCardProps) => {
  const { todo, onEdit, onDelete } = props;

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
          <Button size="small" onClick={() => onEdit(todo)}>
            Edit
          </Button>
          <Button size="small" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>

  
    </>
  );
};
