import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import SignIn from "../page/SignIn.jsx/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Blog from "../page/Blog/Blog";
import AllToys from "../page/AllToys/AllToys";
import ToyDetails from "../page/Shared/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "all-toys",
        element: (
          <PrivateRoutes>
            <AllToys />
          </PrivateRoutes>
        ),
        loader: () => fetch("https://toy-car-server-five.vercel.app/all-toys"),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-car-server-five.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);
