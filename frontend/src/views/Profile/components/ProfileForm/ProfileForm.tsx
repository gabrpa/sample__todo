import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IUser, IUserUpdate } from "../../../../features/user/interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userProfileSchema } from "../../../../features/user/yup.schema";
import TodoTitle from "../../../../components/TodoTitle";

interface IProfileFormProps {
    user: IUser;
    onSubmit: (data: IUserUpdate) => void;
}

export const ProfileForm = (props: IProfileFormProps) => {
    const { user, onSubmit } = props;


  const { register, handleSubmit } = useForm<IUserUpdate>({
    defaultValues: user,
    resolver: yupResolver(userProfileSchema)
  })

    return (
        <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
          <TodoTitle title="User Details"/>
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Typography>First name:</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              size="small"
              {...register('firstName')}
              />
          </Grid>
          <Grid item xs={1}>
            <Typography>Last name:</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              size="small"
              {...register('lastName')}
              />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Typography>Username:</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField 
              disabled 
              size="small"
              {...register('username')}
              />
          </Grid>
          <Grid item xs={1}>
            <Typography>Todos created:</Typography>
          </Grid>
          <Grid item xs={2}>
            <Link to={'/home/todos'}>4</Link>
          </Grid>
          <Grid item xs={3} />
          <Button onClick={handleSubmit(onSubmit)}>Save</Button>
        </Grid>
      );
}