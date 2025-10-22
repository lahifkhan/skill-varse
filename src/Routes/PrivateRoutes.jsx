import React, { use } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(Authcontext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <p>loading....</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/logIn"}></Navigate>;
  }
};

export default PrivateRoutes;
