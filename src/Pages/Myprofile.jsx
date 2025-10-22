import React, { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import "animate.css";
import { Link } from "react-router";
const Myprofile = () => {
  const { user } = useContext(Authcontext);
  console.log(user);

  return (
    <div className="flex justify-center mt-3">
      {user ? (
        <div className="animate__animated animate__fadeInUpBig bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-32 rounded-full border-2 border-secondary p-2">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </div>

            <h1 className=" text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {user.displayName || "User"}
            </h1>

            <p className="text-sm text-gray-600 mb-3">
              {user.email || "No email found"}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full justify-center">
              <Link
                to={"/updateProfile"}
                className="btn btn-secondary w-full sm:w-auto font-semibold"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 font-bold text-2xl">
          No user data found.
        </p>
      )}
    </div>
  );
};

export default Myprofile;
