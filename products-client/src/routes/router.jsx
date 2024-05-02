import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import TopRated from "../Pages/TopRated/TopRated";
import Wishlist from "../Pages/WIshlist/Wishlist";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import AllProducts from "../Pages/AllProducts/AllProducts";
import AddProduct from "../Pages/AddProduct/AddProduct";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path:"/topRated",
                element:<TopRated/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children:[
            {
                path:"/dashboard",
                element:<DashboardHome/>
            },
            {
                path:"/dashboard/allProducts",
                element:<AllProducts/>
            },
            {
                path: "/dashboard/addProducts",
                element: <AddProduct/>
            }
        ]
    }
])