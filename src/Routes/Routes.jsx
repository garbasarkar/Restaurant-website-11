import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "../HomePage/HomePage";
import BenarPart from "../HomePage/BenarPart";
import Login from "../HomePage/Login";
import Register from "../HomePage/Register";
import HomeAllSection from "../HomePage/HomeAllSection";
import BlogPage from "../HomePage/BlogPage";
import AllFood from "../HomePage/AllFood";

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
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/food",
        element: <AllFood></AllFood>,
      },
    ],
  },
]);

export default Routes;
