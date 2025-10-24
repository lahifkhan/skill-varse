import React from "react";
import notFoundImg from "../assets/vecteezy_404-landing-page_6549647.jpg";

const PageNotFound = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center mt-10">
      <img className=" h-[50vh]" src={notFoundImg} alt="" />
      <p className="text-5xl font-bold text-primary">Opps Page Not Found</p>
    </div>
  );
};

export default PageNotFound;
