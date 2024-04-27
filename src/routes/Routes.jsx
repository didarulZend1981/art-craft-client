import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AllArtCraftItem from "../pages/AllArtCraftItem/AllArtCraftItem";
import AddtoCraft from "../pages/AddToCraft/AddtoCraft";
import MyCartList from "../pages/MyCartList/MyCartList";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement: <PageNotFound></PageNotFound>,
    children:[
          {
            path:"/",
            element: <Home></Home>
            // <PrivateRoute>
             //children
            // </PrivateRoute>

          },
         {
          path:"allArtCraft",
          element:<AllArtCraftItem></AllArtCraftItem>
         },
         {
          path:"addToCraft",
          element:<AddtoCraft></AddtoCraft>
          
         },
         {
          path:"myCartList",
          element:<MyCartList></MyCartList>
          
         },
         {
          path:"login",
          element:<Login></Login>
          
         },
         {
          path:"registration",
          element:<Registration></Registration>
          
         }




      ]
    }



]);
export default router;