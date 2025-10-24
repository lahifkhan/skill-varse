import React from "react";
import appNotFoundimg from "../assets/vecteezy_internet-network-warning-404-error-page-or-file-not-found_5084699.jpg";

const AppNotFound = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center mt-10">
      <img className=" h-[50vh]" src={appNotFoundimg} alt="" />
      <p className="text-5xl font-bold text-primary">Opps skill Not Found</p>
    </div>
  );
};

export default AppNotFound;
