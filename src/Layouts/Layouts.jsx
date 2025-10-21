import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Layouts = () => {
  return (
    <div className="bg-[#EDFBF8]">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layouts;
