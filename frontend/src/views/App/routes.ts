import { RouteObject } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Authentication from "../Authentication";
import Profile from "../Profile";
import Home from "../Home";
import { withPrivateRoute } from "../../hocs/withPrivateRoute/withPrivateRoute";
import Unauthorized from "../Unauthorized";

export const routes: RouteObject[] = [

    {
        path: '/auth',
        Component: Authentication
    },
    {
        path: '/unauthorized',
        Component: Unauthorized
    },
    {
        Component: Layout,
        children: [
            {
                path: '/home/profile/',
                Component: withPrivateRoute(Profile),
            },
            {
                path: '/home/todos/',
                Component: withPrivateRoute(Home)
            }
        ]
    }
]

export default routes;