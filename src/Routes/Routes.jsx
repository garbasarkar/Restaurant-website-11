import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "../HomePage/HomePage";
import BenarPart from "../HomePage/BenarPart";
import Login from "../HomePage/Login";
import Register from "../HomePage/Register";
import HomeAllSection from "../HomePage/HomeAllSection";
import BlogPage from "../HomePage/BlogPage";
import AllFood from "../HomePage/AllFood";
import AllFoodControl from "../HomePage/AllFoodControl";
import Parchaes from "../PrivatePrachaesPage/Parchaes";
import DetailsCard from "../PrivateAuth/DetailsCard";
import OrderPage from "../ProfileALlPage/OrderPage";
import AddedFood from "../ProfileALlPage/AddedFood";

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
        element: <AllFoodControl></AllFoodControl>,
      },
      {
        path: "/purchase",
        element: <Parchaes></Parchaes>,
      },
      {
        path: `/food/:id`,
        element: <DetailsCard></DetailsCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
      {
        path: "/orderedFood",
        element: <OrderPage></OrderPage>,
        // loader: ({params}) => fetch`http://localhost:5000/order/${params.id}`
      },
      {
        path: "/addedFood",
        element: <AddedFood></AddedFood>,
      },
    ],
  },
]);

export default Routes;
