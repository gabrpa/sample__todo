import { RouteObject } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Authentication from "../Authentication";
import Profile from "../Profile";
import Home from "../Home";

export const routes: RouteObject[] = [

    {
        path: '/auth',
        Component: Authentication
    },
    {
        path: '/home',
        Component: Layout,
        children: [
            {
                path: '/home/profile',
                Component: Profile,
            },
            {
                path: '/home/todos',
                Component: Home
            }
        ]
    }
]

export default routes;