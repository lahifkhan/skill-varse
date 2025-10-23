import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading";

const Layouts = () => {
  const { state } = useNavigate();
  return (
    <div className="bg-[#EDFBF8]">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen">
        {state == "loading" ? <loading></loading> : <Outlet></Outlet>}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layouts;
