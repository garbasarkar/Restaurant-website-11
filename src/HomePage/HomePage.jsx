import { Outlet } from "react-router-dom";
import Header from "../HeaderPage/Header";
import Footer from "../HeaderPage/Footer";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
