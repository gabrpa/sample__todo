import { Grid } from "@mui/material"
import TodoHeader from "../../components/TodoHeader"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <Grid container justifyContent={'center'}>
            <Grid container item paddingBottom={5}>
                <TodoHeader user={''}/>
            </Grid>
            <Outlet/>
        </Grid>
    )
}