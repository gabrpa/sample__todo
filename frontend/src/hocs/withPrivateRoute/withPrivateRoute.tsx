import { ComponentType } from "react";
import { Navigate } from "react-router-dom";

export const withPrivateRoute = (Component: ComponentType) => (): JSX.Element => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return (<Navigate to={'/unauthorized'}/>)
    }
    return (<Component/>)
}