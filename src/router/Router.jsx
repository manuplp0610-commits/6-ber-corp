import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Shop from "../pages/shop/Shop";
import Bar from "../pages/bar/Bar";
import Console from "../pages/console/Console";
import Computer from "../pages/computer/Computer";
import Event from "../pages/events/Event";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Contact from "../pages/contact/Contact";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
