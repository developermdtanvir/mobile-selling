import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddReview from "../../pages/AddReview/AddReview";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Order from "../../pages/Order/Order";
import Service from "../../pages/Service/Service";
import SignUp from "../../pages/SignUp/SignUp";
import PraivetRoute from "../PraivetRoute/PraivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/order/:id",
        element: (
          <PraivetRoute>
            <Order />
          </PraivetRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addreview",
        element: <AddReview />,
      },
    ],
  },
]);
