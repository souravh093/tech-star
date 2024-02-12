import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Account/Login/Login";
import Auth from "../layout/Auth/Auth";
import Register from "../pages/Account/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/account/login",
        element: <Auth />,
        errorElement: <Error />,
        children: [
            {
                path: "/account/login",
                element: <Login />
            },
            {
                path: "/account/login/register",
                element: <Register />
            }
        ]
    }
])

export default router;