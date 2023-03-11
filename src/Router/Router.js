
import { createBrowserRouter } from "react-router-dom";
import AddToCart from "../Components/AddToCart/AddToCart";
import AllBlog from "../Components/Bloge/AllBlog";
import BlogeDetails from "../Components/Bloge/BlogeDetails";
import DashBoard from "../Components/DashBoard/DashBoard";
import Users from "../Components/DashBoard/Users";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import LoveProduct from "../Components/LoveProduct/LoveProduct";
import Mens from "../Components/NewArraivale/Mens";
import BuyNow from "../Components/Pages/BuyNow";
import CartPage from "../Components/Pages/CartPage/CartPage";
import Home from "../Components/Pages/Home";
import SeeLoveCategories from "../Components/Pages/SeeLoveCategories";
import PrivateRouter from "../Components/PrivateRouter/PrivateRouter";
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
                element:<PrivateRouter><SeeLoveCategories/></PrivateRouter>
            },
            {
                path:"/buyNow",
                element:<PrivateRouter><BuyNow/></PrivateRouter>
            },
            {
                path: "/blogdetails/:id",
                element:<BlogeDetails/>
            },
            {
                path:"/allblog",
                element: <PrivateRouter><AllBlog/></PrivateRouter>
            },
            
            {
                path:"/details/:id",
                loader:({params})=> fetch(`http://localhost:5000/allProduct/${params.id}`),
                element:<DetailsPage/>
            },
            {
                path:"/man",
                element:<Mens></Mens>
            },
            {
                path:'/loveProduct',
                element:<PrivateRouter><LoveProduct/></PrivateRouter>
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
    },
    {
        path:'/cart',
        element:<CartPage/>,
        children:[
            {
                path:"/cart",
                element:<PrivateRouter><AddToCart/></PrivateRouter>
            }
        ]
    },
    {
        path:'/dashBoard',
        element:<DashBoard/>,
        children:[{
            path:'/dashBoard/users',
            element:<Users/>
        }]
    }
])