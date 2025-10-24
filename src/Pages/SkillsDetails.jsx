import React from "react";
import { useLoaderData, useParams } from "react-router";
import seatImg from "../assets/seat.png";
import RatingImg from "../assets/rating.png";
import PriceImg from "../assets/price.png";

import categoryImg from "../assets/category.png";
import Mycontainer from "../Components/Mycontainer";
import BookNow from "../Components/BookNow";
import PageNotFound from "../Components/PageNotFound";
import AppNotFound from "../Components/AppNotFound";
const SkillsDetails = () => {
  const skillsData = useLoaderData();
  const { skillId } = useParams();
  console.log(skillId);
  console.log(skillsData);

  const singleData = skillsData.find((skill) => skill.skillId == skillId);
  console.log(singleData);

  if (singleData === undefined) {
    return <AppNotFound></AppNotFound>;
  }
  return (
    <Mycontainer>
      <div className="card lg:card-side bg-base-100 shadow-sm my-8">
        <figure className=" w-[300px] object-cover">
          <img src={singleData.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">
            {singleData.skillName}
          </h2>
          <div className="font-semibold">
            <p>
              Provide By:{" "}
              <span className="text-primary">{singleData.providerName}</span>
            </p>
            <p className="mb-0 p-0 text-accent">
              Email: <span>{singleData.providerEmail}</span>
            </p>
          </div>

          <div className="flex items-center gap-8 my-2 text-xl text-accent">
            <div className="flex flex-col items-center  gap-3 ">
              <img className="w-[50px] h-[50px]" src={categoryImg} alt="" />
              {singleData.category}
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src={RatingImg} alt="" />
              {singleData.rating}
            </div>

            <div className="flex flex-col items-center gap-3">
              <img className="w-[50px] h-[50px]" src={seatImg} alt="" />
              <p>Slot:{singleData.slotsAvailable}</p>
            </div>
          </div>

          <p className=" text-accent">{singleData.description}</p>

          <div className="card-actions flex gap-4 items-center">
            <div className="flex gap-1 items-center font-bold text-xl">
              <img className="w-6 h-6" src={PriceImg} alt="" />
              <p> ${singleData.price}</p>
            </div>
          </div>
        </div>
      </div>

      <BookNow></BookNow>
    </Mycontainer>
  );
};

export default SkillsDetails;
