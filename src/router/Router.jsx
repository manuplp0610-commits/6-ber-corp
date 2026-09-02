import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Bar from "../pages/bar/Bar";
import Computer from "../pages/computer/Computer";
import Console from "../pages/console/Console";
import Event from "../pages/events/Event";
import NoFound from "../pages/noFound/NoFound";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NoFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "computer", element: <Computer /> },
        { path: "console", element: <Console /> },
        { path: "bar", element: <Bar /> },
        { path: "event", element: <Event /> },
        { path: "*", element: <NoFound /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);

export default router;
