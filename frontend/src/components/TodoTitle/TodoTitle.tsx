import { Grid, Typography } from "@mui/material"

interface ITodoTitleProps {
    title: string
}

export const TodoTitle = (props: ITodoTitleProps) => {
    const { title } = props;

    return (
        <Grid item xs={12} paddingBottom={3}>
            <Typography variant="h3" textAlign={'center'}>{title}</Typography>
        </Grid>
    )
}