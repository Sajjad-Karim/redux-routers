import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Cart from "../pages/cart/Cart";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/details/:index", element: <Details /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
