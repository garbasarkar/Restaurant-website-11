import { Link } from "react-router-dom";
import login from "/src/assets/signin.png";
import google from "/src/assets/google.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../PrivateAuth/PrivateAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Routes/firebase";
import swal from 'sweetalert';

const Register = () => {
  const { createAuthUser, upDateProfile } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const handleFromRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, photo, email, password);

    setPassword('');
    setErrors('');
    if(password.length < 6){
      setPassword('Please Provide ma a six creacter is longer!')
    }
    createAuthUser(email, password)
      .then((result) => {
        console.log(result.user);
        upDateProfile(name, photo).then(() => {
          console.log("user profile update is complate!");
        });

        swal("Login successful!");

        from.reset();
      })
      .catch((error) => {
        console.log(error);
        setErrors("Please provide ma a valid email and password!");
      });
  };
  const googlePupopSignIn = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        swal("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        setErrors("Please provide ma a valid email and password!");
      });
  };
  return (
    <div className=" bg-[#7BABDE] py-20">
      <div className="mx-auto md:w-1/3 px-1 md:p-0">
        <h1 className="text-center text-3xl text-white font-semibold mb-3">
          Register Now!
        </h1>
        <img className="w-full h-32 mb-2" src={login} alt="" />
        <div>
          <form onSubmit={handleFromRegister}>
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
            {password && <p className="text-sm text-red-500 font-semibold">{password}</p>}
            <input
              className="w-full cursor-pointer py-2 rounded bg-slate-400"
              type="submit"
              value="Register"
            />
            {errors && <p className="text-sm text-red-500 font-semibold">{errors}</p>}
            <h1 className="mt-1 text-white">
              All Ready Havent account?{" "}
              <Link className="text-purple-600 font-semibold" to="/login">
                Login
              </Link>
            </h1>
          </form>
        </div>
        <div className="flex justify-center mt-5">
          <div
            onClick={googlePupopSignIn}
            className="cursor-pointer flex items-center justify-between px-2 w-72 hover:bg-purple-600 text-white font-semibold rounded-full border border-white py-1"
          >
            <img className="w-8 rounded-full" src={google} alt="" />
            <h1>Google Sign In</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
