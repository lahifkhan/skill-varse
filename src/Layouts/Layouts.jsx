import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading";

const Layouts = () => {
  const { state } = useNavigate();
  return (
    <div className="bg-base-100">
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main>
        {state == "loading" ? <loading></loading> : <Outlet></Outlet>}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layouts;
