import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/auth',
        element: <h2>Authentication layout</h2>
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '/*',
        element: <h2>Page not found</h2>
    }
])

export default router;