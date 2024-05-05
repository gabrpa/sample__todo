import { Box, Button, ButtonBase, Card, Grid, TextField, Typography } from "@mui/material"
import { IAuthLogin, IAuthRegister } from "../../../../features/auth/interface";
import { useState } from "react";
import { UseFormReset, useForm } from "react-hook-form";
import TodoDialog from "../../../../components/TodoDialog";
import { authLoginSchema, authRegisterSchema } from "../../../../features/auth/yup.schema";
import { yupResolver } from "@hookform/resolvers/yup";

interface IAuthenticationFormProps {
    onLogin: (data: IAuthLogin, reset: UseFormReset<IAuthLogin>) => void;
    onRegister: (data: IAuthRegister, reset: UseFormReset<IAuthRegister>) => void;
}

export const AuthenticationForm = (props: IAuthenticationFormProps) => {
    const { onLogin, onRegister } = props;
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);

    const { register, handleSubmit, reset } = useForm({
      resolver: yupResolver(authLoginSchema)
    })

    return (
      <>
       <Grid item xs={4}>
        <Card
            elevation={2}
            sx={{
              padding: 2,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography padding={3} variant="h1">
              Todo
            </Typography>
            <Typography paddingBottom={1}>
              {"Welcome! Please login or register to start using."}
            </Typography>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                required
                label={"Username"}
                {...register('username')}
                 />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                required
                label={"Password"}
                {...register('password')}
                 />
            </Grid>
            <Box display={"flex"} justifyContent={"center"} padding={2}>
              <Button variant="contained" onClick={handleSubmit(async (data) => {
                await onLogin(data, reset);
              })}>
                Login
              </Button>
            </Box>
            <Typography>
              Not a member yet? Please register{" "}
              <ButtonBase
                sx={{ color: "blueviolet" }}
                onClick={() => setOpenRegisterDialog(true)}
              >
                HERE
              </ButtonBase>
            </Typography>
          </Card>
       </Grid>

       <TodoDialog
        open={openRegisterDialog}
        title={"Registration"}
        description="Create your account and start organizing your life with our TODO App!"
        textfield={[
          {
            label: "First Name",
            name: "firstName",
            required: true,
          },
          {
            label: "Last Name",
            name: "lastName",
            required: true,
          },
          {
            label: "Username",
            name: "username",
            required: true,
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            required: true,
          },
        ]}
        schema={authRegisterSchema}
        onSubmit={onRegister}
        onClose={() => setOpenRegisterDialog(false)}
      />
      </>
    )
}

export default AuthenticationForm;