import { Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProfileFormProps {
    user: unknown;
}

export const ProfileForm = (props: IProfileFormProps) => {
    const { user } = props;

    console.log(user);

    return (
        <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
          <Grid item xs={12}>
            <Typography variant="h3" padding={3} textAlign={"center"}>
              User Details
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Typography>First name:</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField size="small"/>
          </Grid>
          <Grid item xs={1}>
            <Typography>Last name:</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField size="small" />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Typography>Username:</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField size="small" />
          </Grid>
          <Grid item xs={1}>
            <Typography>Todos created:</Typography>
          </Grid>
          <Grid item xs={2}>
            <Link to={'/home/todos'}>4</Link>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      );
}