
import { createBrowserRouter } from "react-router-dom";
import AllBlog from "../Components/Bloge/AllBlog";
import BlogeDetails from "../Components/Bloge/BlogeDetails";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import Main from "../Components/Layout/Main";
import FoundProduct from "../Components/Pages/FoundProduct";
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
                element:<FoundProduct/>
            },
            {
                path: "/blogdetails/:id",
                element:<BlogeDetails/>
            },
            {
                path:"/allblog",
                element: <AllBlog/>
            },
            {
                path:"/details/:id",
                loader:({params})=> fetch(`http://localhost:5000/man/${params.id}`),
                element:<DetailsPage/>
            }

        ]
    }
])