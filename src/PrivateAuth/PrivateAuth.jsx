import { createContext, useEffect, useState } from "react";
import auth from "../Routes/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const PrivateAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAuthUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subScriber = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the on state chance!", currentUser);
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      subScriber();
    };
  }, []);

  const upDateProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const infoAuth = { user, createAuthUser, userLogIn, userSignOut, upDateProfile, loading };

  return (
    <AuthContext.Provider value={infoAuth}>{children}</AuthContext.Provider>
  );
};

export default PrivateAuth;
