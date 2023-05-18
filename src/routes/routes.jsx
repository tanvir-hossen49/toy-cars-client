import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import { SingIn } from "../page/SignIn.jsx/SignIn";
import { SingUp } from "../page/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signUp",
        element: <SingUp />,
      },
    ],
  },
]);
