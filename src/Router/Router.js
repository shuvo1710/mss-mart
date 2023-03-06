
import { createBrowserRouter } from "react-router-dom";
import AllBlog from "../Components/Bloge/AllBlog";
import BlogeDetails from "../Components/Bloge/BlogeDetails";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import Mens from "../Components/NewArraivale/Mens";
import BuyNow from "../Components/Pages/BuyNow";
import Home from "../Components/Pages/Home";
import SeeLoveCategories from "../Components/Pages/SeeLoveCategories";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";



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
                loader:({params})=> fetch(`http://localhost:5000/allProduct/${params.id}`),
                element:<DetailsPage/>
            },
            {
                path:"/man",
                element:<Mens></Mens>
            }
        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"/register",
        element: <Register/>
    },
    {
        path:"/profile",
        element: <Profile/>
    }
])