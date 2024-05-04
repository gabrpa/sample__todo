import { Grid } from "@mui/material";
import ProfileForm from "./components/ProfileForm/";

export const Profile = () => {
  return(
    <Grid container>
        <ProfileForm user={''} />
    </Grid>
  )
};
