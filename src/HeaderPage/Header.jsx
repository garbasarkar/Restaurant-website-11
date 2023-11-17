import { Link, NavLink } from "react-router-dom";
import webLogo from "/src/assets/websiteLogo-removebg-preview.png";
import { useContext, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { userSignOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const userLogOut = () => {
    userSignOut()
      .then((result) => {
        console.log("user log out successful!", result);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-[#E4FFE6] shadow-lg py-7">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div onClick={() => setOpen(!open)} className="text-2xl lg:hidden pl-5">
          {open === true ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <div className="hidden lg:inline-flex">
          <Link to="/">
            <img className="w-32" src={webLogo} alt="image" />
          </Link>
        </div>
        <ul
          className={`bg-gray-400 p-5 md:flex duration-1000 absolute ${
            open ? "left-0 top-20" : "top-[-400px] left-0"
          } lg:static  px-5 lg:bg-[#E4FFE6] z-10 `}
        >
          <NavLink className="mr-5 text-lg font-semibold" to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink className="mr-5 text-lg font-semibold" to="/food">
            <li>All Food</li>
          </NavLink>
          {user && (
            <NavLink className="mr-5 text-lg font-semibold" to="/service">
              <li>Service</li>
            </NavLink>
          )}
          <NavLink className="mr-5 text-lg font-semibold" to="/blog">
            <li>Blog</li>
          </NavLink>
          {user && (
            <NavLink className="mr-5 text-lg font-semibold" to="/contact">
              <li>Contact</li>
            </NavLink>
          )}
        </ul>
        <div className="flex gap-3 items-center">
          {/* <input type="checkbox" className="toggle" checked /> */}
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button px-4 py-1 rounded-md border border-[#F97316]"
              >
                Profile
              </label>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                {user && (
                  <div className="flex justify-center">
                    <img
                      className="w-14 h-14 rounded-full"
                      src={user.photoURL}
                    ></img>
                  </div>
                )}
                {user && (
                  <h5 className="text-center mb-5 mt-1">{user.email}</h5>
                )}
                <NavLink to="/addedFood">
                  <a className="text-lg">My Added Food</a>
                </NavLink>
                <NavLink to="/aFood">
                  <a className="text-lg">Add A Food</a>
                </NavLink>
                <NavLink to="/orderedFood">
                  <a className="text-lg">My Rrdered Food</a>
                </NavLink>
              </ul>
            </div>
          </div>
          {user && (
            <img className=" w-10 h-10 rounded-full" src={user.photoURL}></img>
          )}
          {/* {user && <h5>{user.email}</h5>} */}
          {user ? (
            <button
              className="border px-4 py-1 rounded-md border-[#F97316]"
              onClick={userLogOut}
            >
              LOGOUT
            </button>
          ) : (
            <NavLink
              to="/login"
              className="border px-4 py-1 rounded-md border-[#F97316]"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
