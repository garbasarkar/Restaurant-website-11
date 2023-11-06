import { Link, NavLink } from "react-router-dom";
import webLogo from "/src/assets/websiteLogo-removebg-preview.png";

const Header = () => {
  return (
    <div className="bg-[#E4FFE6] shadow-lg py-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <img className="w-32" src={webLogo} alt="image" />
        </Link>
        <ul className="flex gap-6 text-lg font-semibold">
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/food">
            <li>All Food</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
        </ul>
        <div className="flex gap-3 items-center">
          <input type="checkbox" className="toggle" checked />
          <button>log out</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
