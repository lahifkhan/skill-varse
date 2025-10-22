import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LogIn = () => {
  const [showPass, setShowPass] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
  };

  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center font-bold text-xl text-primary">Log in</h1>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input placeholder:text-gray-400"
                placeholder="Email"
                name="email"
              />

              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input placeholder:text-gray-400"
                  placeholder="Password"
                  name="password"
                />
                <button
                  onClick={handleShowPass}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button className="btn btn-secondary mt-4">Log in</button>

              <div className="flex flex-col text-center space-y-2">
                <p className=" font-semibold text-accent">Or</p>
                <button className="btn flex items-center gap-1 bg-black text-white">
                  {" "}
                  <FcGoogle size={24} />
                  Continue With Google
                </button>
              </div>
            </fieldset>
          </form>

          <p>
            Don't have an account?{" "}
            <Link className="text-blue-500" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
