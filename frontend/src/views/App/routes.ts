import { RouteObject } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Profile from "../Profile";
import Todo from "../Todo";
import Login from "../Login";

export const routes: RouteObject[] = [

    {
        path: '/login',
        Component: Login
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
                path: '/home/todo',
                Component: Todo
            }
        ]
    }
]

export default routes;