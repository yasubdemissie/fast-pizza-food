import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import {getMenu as menuLoader} from "./services/apiRestaurant";

import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import User from "./features/user/CreateUser";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
