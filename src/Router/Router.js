
import { createBrowserRouter } from "react-router-dom";
import AllBlog from "../Components/Bloge/AllBlog";
import BlogeDetails from "../Components/Bloge/BlogeDetails";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import Main from "../Components/Layout/Main";
import BuyNow from "../Components/Pages/BuyNow";
import FoundProduct from "../Components/Pages/FoundProduct";
import Home from "../Components/Pages/Home";
import SeeLoveCategories from "../Components/Pages/SeeLoveCategories";


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
                path:"/SeeLoveCategories",
                element:<SeeLoveCategories/>
            },
            {
                path:"/buyNow",
                element:<BuyNow/>
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