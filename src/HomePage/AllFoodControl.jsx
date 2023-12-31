import BanerSec from "../PrivatePrachaesPage/ParChaesBenar";
import AllFood from "./MenuFoods";
import LeftSite from "./LeftSite";
import AllFoodP from "./AllFoodP";
import { Helmet } from "react-helmet-async";

const AllFoodControl = () => {
  return (
    <div className=" ">
      <LeftSite></LeftSite>
      <div className="max-w-6xl mx-auto">
        <AllFoodP></AllFoodP>
      </div>
    </div>
  );
};

export default AllFoodControl;
