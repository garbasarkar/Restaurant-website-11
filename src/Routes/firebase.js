// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4G2ml8MXPfiAM5L9cFW9GHSIJxnz3UMc",
  authDomain: "restaurant-assignment-11.firebaseapp.com",
  projectId: "restaurant-assignment-11",
  storageBucket: "restaurant-assignment-11.appspot.com",
  messagingSenderId: "909200529615",
  appId: "1:909200529615:web:2e44cb5710d09f8d39ffba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;