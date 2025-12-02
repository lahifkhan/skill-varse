import React from "react";
import statBg from "../../assets/banner-background/stat-background.png";
const Stat = () => {
  return (
    <div
      className="bg-cover bg-center p-6 mt-16 "
      style={{
        backgroundImage: `url(${statBg})`,
      }}
    >
      <div className="flex  px-2 md:px-16 justify-between ">
        <div className=" border-2 border-white p-2 flex flex-col items-center justify-center  rounded-full text-center min-h-40 min-w-40">
          <h4 className="font-bold text-2xl text-white">6,879+</h4>
          <p className="text-sm font font-semibold text-secondary">
            Learners & counting
          </p>
        </div>

        <div className=" border-2 border-white p-2 flex flex-col items-center justify-center  rounded-full text-center min-h-40 min-w-40 ">
          <h4 className="font-bold text-2xl text-white">6,879+</h4>
          <p className="text-sm font-semibold text-secondary">
            Learners & counting
          </p>
        </div>
        <div className=" border-2 border-white p-2 flex flex-col items-center justify-center  rounded-full text-center min-h-40 min-w-40">
          <h4 className="font-bold text-2xl text-white">6,879+</h4>
          <p className="text-sm font-semibold text-secondary">
            Learners & counting
          </p>
        </div>
        <div className=" border-2 border-white p-2 flex flex-col items-center justify-center  rounded-full text-center min-h-40 min-w-40">
          <h4 className="font-bold text-2xl text-white">6,879+</h4>
          <p className="text-sm font-semibold text-secondary">
            Learners & counting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
