import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import SignIn  from "../page/SignIn.jsx/SignIn";
import SignUp from "../page/SignUp/SignUp";

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
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
