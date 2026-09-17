import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Shop from "../pages/shop/Shop";
import Bar from "../pages/bar/Bar";
import Console from "../pages/console/Console";
import Computer from "../pages/computer/Computer";
import Event from "../pages/events/Event";
import Login from "../pages/login/Login";
import Dashbord from "../pages/dashbord/Dashbord";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/console",
        element: <Console />,
      },
      {
        path: "/computer",
        element: <Computer />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/console",
        element: <Console />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
