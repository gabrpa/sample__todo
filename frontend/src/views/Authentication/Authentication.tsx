import { Grid } from "@mui/material";
import { login, register } from "../../features/auth/api";
import { useNavigate } from "react-router-dom";
import { IAuthLogin, IAuthRegister } from "../../features/auth/interface";
import { UseFormReset } from "react-hook-form";
import { AuthenticationForm } from "./components";

export const Authentication = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: IAuthLogin, reset: UseFormReset<IAuthLogin> | undefined) => {
    await login(data)
      reset && reset();
      navigate(`/home/todos/`);
  };

  const handleRegister = async (
    data: IAuthRegister,
    reset: UseFormReset<IAuthRegister> | undefined
  ) => {
    await register(data);
    reset && reset();
    navigate("/auth");
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <AuthenticationForm onLogin={handleLogin} onRegister={handleRegister} />
    </Grid>
  );
};
