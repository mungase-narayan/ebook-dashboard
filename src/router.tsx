import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
} from "react-router-dom";
import LoginPage from "@/pages/auth/Login";
import HomePage from "@/pages/Home";
import SignUp from "@/pages/auth/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "sign-up",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
export default Router;
