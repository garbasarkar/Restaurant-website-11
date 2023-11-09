import { Link } from "react-router-dom";
import login from "/src/assets/loginImage.png";
import google from "/src/assets/google.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import swal from 'sweetalert';
const Login = () => {
  const { userLogIn } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  setPassword('');
    setErrors('');
    if(password.length < 6){
      setPassword('Please Provide ma a six creacter is longer!')
    }
  const handleLoginFrom = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Login successful!");
        from.reset();
      })
      .catch((error) => {
        console.error(error);
        setErrors("Please provide ma a valid email and password!");
      });
  };
  return (
    <div className=" bg-[#7BABDE] py-20">
      <div className="mx-auto md:w-1/3 px-1 md:p-0">
        <h1 className="text-center text-3xl text-white font-semibold mb-3">
          Login Now!
        </h1>
        <img className="w-full h-32 mb-2" src={login} alt="" />
        <div>
          <form onSubmit={handleLoginFrom}>
            <input
              className="w-full py-2 rounded mb-2 pl-2"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />{" "}
            <br />
            {password && <p className="text-sm text-red-500 font-semibold">{password}</p>}
            <input
              className="w-full py-2 rounded mb-2 pl-2"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />{" "}
            <br />
            <input
              className="w-full py-2 rounded cursor-pointer bg-slate-400"
              type="submit"
              value="Login"
            />
            {errors && <p className="text-sm text-red-500 font-semibold">{errors}</p>}
          </form>
          <h1 className="mt-1 text-white">
            All Ready Havent account?{" "}
            <Link className="text-purple-600 font-semibold" to="/register">
              Register
            </Link>
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="cursor-pointer flex items-center justify-between px-2 w-72 hover:bg-purple-600 text-white font-semibold rounded-full border border-white py-1">
            <img className="w-8 rounded-full" src={google} alt="" />
            <h1>Google SignIn</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
