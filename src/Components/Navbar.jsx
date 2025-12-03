import React, { useContext, useEffect, useState } from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import Mycontainer from "./Mycontainer";
import { Authcontext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser, loading } = useContext(Authcontext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logOutUser()
      .then(() => toast.success("Account Logged Out"))
      .catch((err) => toast.error(err));
  };

  //  Reusable Active Link Style
  const navActive = ({ isActive }) =>
    isActive
      ? "text-primary font-bold border-b-2 border-primary"
      : "hover:text-primary";

  return (
    <div className="bg-base-100 shadow-sm  md:px-16">
      <Mycontainer>
        <div className="navbar">
          {/*  LEFT SIDE  */}
          <div className="navbar-start">
            {/* Mobile Dropdown */}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              {/* Mobile Menu */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow font-semibold"
              >
                <li>
                  <NavLink className={navActive} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to="/myProfile">
                    MyProfile
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to="/allSkills">
                    All Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to="/events">
                    Event
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navActive} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Logo + Name */}
            <div className="flex items-center">
              <img className="w-[30px] h-[30px]" src={logoImg} alt="logo" />
              <Link
                to="/"
                className="btn hidden md:block btn-ghost text-xl py-0 px-2 font-bold"
              >
                <span className="text-primary">Skill</span>Verse
              </Link>
            </div>
          </div>

          {/* ================= CENTER NAV (Desktop) ================= */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold gap-2">
              <li>
                <NavLink className={navActive} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navActive} to="/myProfile">
                  MyProfile
                </NavLink>
              </li>
              <li>
                <NavLink className={navActive} to="/allSkills">
                  All Skills
                </NavLink>
              </li>
              <li>
                <NavLink className={navActive} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={navActive} to="/events">
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink className={navActive} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="navbar-end">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle mr-2"
            />
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
                    alt="profile"
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
                  to="/logIn"
                  className="btn btn-primary text-white font-bold"
                >
                  LogIn
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary text-white font-bold"
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
