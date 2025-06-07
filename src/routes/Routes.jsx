import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Cart from "../pages/Cart";
import PhoneDetails from "../pages/PhoneDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
            loader: () => fetch("phones.json"),
        },
        {
          path: '/about',
          Component: About

        },
        {
            path: '/favourites',
            Component: Favourites
        },
        {
          path: '/cart',
          Component: Cart
        },
        {
          path: '/phone-details',
          Component: PhoneDetails 
        }
    ]
  }
]);