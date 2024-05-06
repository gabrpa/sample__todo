import { ButtonBase, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Unauthorized = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/auth");
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Typography>
        Unauthorized! Click{" "}
        <ButtonBase onClick={handleNavigation}>HERE</ButtonBase> to be
        redirected
      </Typography>
    </Grid>
  );
};
