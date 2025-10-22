import React, { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

const ForgetPass = () => {
  const { resetPassword } = useContext(Authcontext);
  const location = useLocation();
  const logInEmail = location.state?.email || "";

  const handlePassReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        window.location.href = "https://mail.google.com";
      })

      .catch((err) => toast.error(err.code));
  };
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-center font-bold text-2xl text-primary my-5">
        Book Now
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handlePassReset}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input placeholder:text-gray-400"
                placeholder="Email"
                name="email"
                required
                defaultValue={logInEmail}
              />

              <button className="btn btn-secondary mt-4 text-xl">
                Reset Password
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
