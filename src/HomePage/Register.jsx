import { Link } from "react-router-dom";
import login from "/src/assets/signin.png";
import google from "/src/assets/google.jpg";

const Register = () => {
  return (
    <div className=" bg-[#7BABDE] py-20">
      <div className="mx-auto md:w-1/3 px-1 md:p-0">
        <h1 className="text-center text-3xl text-white font-semibold mb-3">
          Register Now!
        </h1>
        <img className="w-full h-32 mb-2" src={login} alt="" />
        <div>
          <input
            className="w-full py-2 rounded mb-2 pl-2"
            type="Name"
            name="name"
            id=""
            placeholder="Name"
          />{" "}
          <br />
          <input
            className="w-full py-2 rounded mb-2 pl-2"
            type="text"
            name="photo"
            id=""
            placeholder="PhotoURL"
          />{" "}
          <br />
          <input
            className="w-full py-2 rounded mb-2 pl-2"
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />{" "}
          <br />
          <input
            className="w-full py-2 rounded mb-2 pl-2"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />{" "}
          <br />
          <input
            className="w-full cursor-pointer py-2 rounded bg-slate-400"
            type="submit"
            value="Register"
          />
          <h1 className="mt-1 text-white">
            All Ready Havent account?{" "}
            <Link className="text-purple-600 font-semibold" to="/login">
              Login
            </Link>
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex items-center justify-between px-2 w-72 hover:bg-purple-600 text-white font-semibold rounded-full border border-white py-1">
            <img className="w-8 rounded-full" src={google} alt="" />
            <h1>Google Sign In</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
