import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0" />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "terms",
                element: <Terms />,
            }
        ]
    },
    {
        path: "category",
        element: <Main />,
        children: [
            {
                path: ":id",
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-imnahmed17.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: "news",
        element: <NewsLayout />,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-imnahmed17.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;