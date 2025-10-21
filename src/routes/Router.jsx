import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomeLayout from "../Pages/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
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