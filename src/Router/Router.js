
import { createBrowserRouter } from "react-router-dom";
import Chect from "../Components/Check/Chect";
import Main from "../Components/Layout/Main";
import Home from "../Components/Pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/check",
                element:<Chect/>
            }

        ]
    }
])