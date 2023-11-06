import BenarPart from "./BenarPart";
import Chef from "./Chef";
import Discount from "./Discount";
import MenuItem from "./MenuItem";
import Review from "./Review";
import WelCome from "./WelCome";

const HomeAllSection = () => {
  return (
    <div>
      <BenarPart></BenarPart>
      <WelCome></WelCome>
      <Chef></Chef>
      <MenuItem></MenuItem>
      <Discount></Discount>
      <Review></Review>
    </div>
  );
};

export default HomeAllSection;
