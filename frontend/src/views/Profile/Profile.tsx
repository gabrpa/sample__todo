import { Grid } from "@mui/material";
import ProfileForm from "./components/ProfileForm/";
import useSWR from "swr";
import { getUser, updateUser } from "../../features/user/api";
import { IUserUpdate } from "../../features/user/interface";

export const Profile = () => {
  const username = sessionStorage.getItem('username');

  const { data: user, mutate } = useSWR(username !== undefined && ['GET_USER', username], () => getUser(username));

  const handleEditProfile = async (data: IUserUpdate) => {
    await updateUser(username!, data);
    mutate();
  }


  return(
    <Grid container>
        <ProfileForm user={user} onSubmit={handleEditProfile} />
    </Grid>
  )
};
