import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

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
    }
])

export default router;