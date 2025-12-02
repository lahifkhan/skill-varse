import React from "react";

import topic5 from "../../assets/topic/topic5.png";
import topic4 from "../../assets/topic/topic4.png";
import topic3 from "../../assets/topic/topic3.png";
import topic2 from "../../assets/topic/topic2.png";
import topic1 from "../../assets/topic/topic1.png";

const FavouriteTopic = () => {
  return (
    <div className="mt-20 pb-8 px-2 md:px-16">
      <p className="text-primary font-bold text-xl mb-2">Category</p>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row  justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Favorite topics to learn
        </h1>
        <button className="btn btn-primary">Browse edunity Courses</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 mt-12">
        <div className="flex flex-col items-center space-y-6">
          <img className="w-20 h-20" src={topic5} alt="" />
          <div className="text-center">
            <h4 className="font-bold">web Design</h4>
            <p className="text-primary">08 Courses</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img className="w-20 h-20" src={topic4} alt="" />
          <div className="text-center">
            <h4 className="font-bold">Graphics design</h4>
            <p className="text-primary">15 Courses</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img className="w-20 h-20" src={topic3} alt="" />
          <div className="text-center">
            <h4 className="font-bold">Video Editor</h4>
            <p className="text-primary">10 Courses</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img className="w-20 h-20" src={topic2} alt="" />
          <div className="text-center">
            <h4 className="font-bold">Content Writing</h4>
            <p className="text-primary">07 Courses</p>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img className="w-20 h-20" src={topic1} alt="" />
          <div className="text-center">
            <h4 className="font-bold">Marketing</h4>
            <p className="text-primary">15 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteTopic;
