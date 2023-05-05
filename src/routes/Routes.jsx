import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";
import Login from "../pages/Login/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/chefs")
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/chef/:id",
                element: <Chef></Chef>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    }
])



export default router;