import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center  ">
      <img
        className="w-full h-[70vh]"
        src="https://i.ibb.co/NKBncDL/404img.jpg"
        alt=""
      />
      <NavLink to="/">
        <button className="px-8 py-2 bg-[#dad6de] font-semibold  rounded-md">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
