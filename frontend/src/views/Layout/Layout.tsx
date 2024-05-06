import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import useSWR from "swr"
import { getUser } from "../../features/user/api"
import TodoHeader from "../../components/TodoHeader"


export const Layout = () => {
    const username = sessionStorage.getItem('username');
    const { data: user } = useSWR( username !== undefined && ['GET_USER', username], () => getUser(username));

    return (
        <Grid container justifyContent={'center'}>
            <Grid container item paddingBottom={5}>
                <TodoHeader user={user}/>
            </Grid>
            <Outlet/>
        </Grid>
    )
}