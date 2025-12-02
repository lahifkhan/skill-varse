import React, { useContext } from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import Mycontainer from "./Mycontainer";
import { Authcontext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser, loading } = useContext(Authcontext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => toast.success("Accounts Log out"))
      .catch((err) => toast.error(err));
  };
  return (
    <div className="bg-base-100 shadow-sm">
      <Mycontainer>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li>
                  <NavLink to={"/myProfile"}>MyProfile</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <img className="w-[30px] h-[30px]" src={logoImg} alt="" />
              <Link
                to={"/"}
                className="btn hidden  md:block btn-ghost text-xl  py-0 px-2 font-bold"
              >
                <span className="text-secondary">Skill</span>Verse
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/myProfile"}>MyProfile</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : user ? (
              <div className="flex gap-3 items-center">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img
                    className="w-10 h-10 rounded-full border p-0.5 border-primary cursor-pointer"
                    src={user.photoURL}
                  />
                </div>

                <button
                  onClick={handleLogOut}
                  className="btn btn-secondary font-bold"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to={"/logIn"}
                  className="btn btn-secondary text-white font-bold"
                >
                  LogIn
                </Link>

                <Link
                  to={"/register"}
                  className="btn btn-secondary text-white  font-bold"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </Mycontainer>
    </div>
  );
};

export default Navbar;
