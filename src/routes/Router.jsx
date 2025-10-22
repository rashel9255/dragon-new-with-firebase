import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import HomeLayout from "../Pages/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/news-details/:id",
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
    },
    {
        path: "/*",
        element: <h2>Page not found</h2>,
    },
]);

export default router;