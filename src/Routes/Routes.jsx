import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "../HomePage/HomePage";
import Login from "../HomePage/Login";
import Register from "../HomePage/Register";
import HomeAllSection from "../HomePage/HomeAllSection";
import BlogPage from "../HomePage/BlogPage";
import AllFoodControl from "../HomePage/AllFoodControl";
import Parchaes from "../PrivatePrachaesPage/Parchaes";
import DetailsCard from "../PrivateAuth/DetailsCard";
import OrderPage from "../ProfileALlPage/OrderPage";
import AddedFood from "../ProfileALlPage/AddedFood";
import FormFoodAdd from "../ProfileALlPage/FormFoodAdd";
import UpdatePage from "../ProfileALlPage/UpdatePage";
import PrivateRouter from "../PrivateAuth/PrivateRouter";
import Home from "../HomePage/Home";

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
        path: "/home",
        element: <Home></Home>,
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
        path: "/aFood",
        element: <Parchaes></Parchaes>,
      },
      {
        path: `/food/:id`,
        element: (
          <PrivateRouter>
            <DetailsCard></DetailsCard>
          </PrivateRouter>
        ),
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
        element: <AddedFood></AddedFood>
      },
      {
        path: "/purchase/:id",
        element: <FormFoodAdd></FormFoodAdd>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
      {
        path: "/formFood/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/formFood/${params.id}`),
      },
    ],
  },
]);

export default Routes;
