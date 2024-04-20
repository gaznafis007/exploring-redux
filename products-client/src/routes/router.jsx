import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import TopRated from "../Pages/TopRated/TopRated";
import Wishlist from "../Pages/WIshlist/Wishlist";

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
    }
])