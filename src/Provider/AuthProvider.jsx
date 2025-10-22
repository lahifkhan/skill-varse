import React, { useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  // register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // continue with google
  const creatUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // update user profile
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // observation funtion
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    creatUserWithGoogle,
    updateUser,
    setUser,
    setLoading,
    logOutUser,
    user,
    loading,
  };

  return <Authcontext value={authInfo}>{children}</Authcontext>;
};

export default AuthProvider;
