import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const handleFormSubmit = (e) => {
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
          <h1 className="text-center font-bold text-xl text-primary">
            Register Now
          </h1>
          <form onSubmit={handleFormSubmit}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Your Name"
                name="name"
              />

              {/* photo */}
              <label className="label">Photo</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Phot Url"
                name="photo"
              />

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
              {/* terms and conditon */}
              <div>
                <label className="label">
                  <input type="checkbox" className="checkbox" name="terms" />
                  Terms and Condition
                </label>
              </div>

              <button className="btn btn-secondary mt-4">Register</button>

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
            Already have account?{" "}
            <Link className="text-blue-500" to={"/logIn"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
