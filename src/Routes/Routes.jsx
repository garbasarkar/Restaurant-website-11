import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "../HomePage/HomePage";
import BenarPart from "../HomePage/BenarPart";
import Login from "../HomePage/Login";
import Register from "../HomePage/Register";
import HomeAllSection from "../HomePage/HomeAllSection";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        element: <HomeAllSection></HomeAllSection>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
