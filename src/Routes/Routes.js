import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layout/DashboardLayout";
import { LoginLayout } from "../layout/LoginLayout";
import { Main } from "../layout/Main";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Home } from "../pages/Home/Home/Home";
import { Login } from "../pages/Login/Login";
import { Product } from "../pages/Product/Product";
import { ProductDetails } from "../pages/Product/ProductDetails";
import { Signup } from "../pages/Signup/Signup";
import { PraivetRoute } from "./PraivetRoute/PraivetRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product/:catagory',
                element: <Product />
            },
            {
                path: '/products/:id',
                element: <PraivetRoute><ProductDetails /></PraivetRoute>,
                loader: ({ params }) => axios.get(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/login/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
])