import AllFood from "./MenuFoods";
import BenarPart from "./BenarPart";
import Chef from "./Chef";
import Discount from "./Discount";
import MenuItem from "./MenuItem";
import Review from "./Review";
import WelCome from "./WelCome";
import MenuFoods from "./MenuFoods";
import HappyCus from "./HappyCus";
import { Helmet } from "react-helmet-async";

const HomeAllSection = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant</title>
      </Helmet>
      <BenarPart></BenarPart>
      <WelCome></WelCome>
      <Chef></Chef>
      <MenuFoods></MenuFoods>
      <Discount></Discount>
      <HappyCus></HappyCus>
    </div>
  );
};

export default HomeAllSection;
