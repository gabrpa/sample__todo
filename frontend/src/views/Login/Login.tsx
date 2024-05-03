import {
  Box,
  Button,
  ButtonBase,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TodoDialog from "../../components/TodoDialog";

export const Login = () => {
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false);

  const handleLogin = () => {
    console.log("Login");
  };

  const handleRegister = () => {
    console.log("Register");
  };

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
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
              <TextField fullWidth label={"Username"} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label={"Password"} />
            </Grid>
            <Box display={"flex"} justifyContent={"center"} padding={2}>
              <Button variant="contained" onClick={() => handleLogin()}>
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
      </Grid>

      <TodoDialog
        open={openRegisterDialog}
        title={"Registration"}
        description="Create your account and start organizing your life with our TODO App!"
        textfield={[
          {
            label: "First Name",
            name: "firstName",
            type: "text",
            required: true,
          },
          {
            label: "Last Name",
            name: "lastName",
            type: "text",
            required: true,
          },
          {
            label: "Username",
            name: "username",
            type: "text",
            required: true,
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            required: true,
          },
        ]}
        onSubmit={() => handleRegister()}
        onClose={() => setOpenRegisterDialog(false)}
      />
    </>
  );
};
