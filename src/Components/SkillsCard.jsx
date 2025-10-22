import React from "react";
import connectImg from "../assets/stayConnect.jpg";
import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { PiSeatbeltFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router";

const SkillsCard = ({ skills }) => {
  return (
    <div>
      <div className="card bg-base-100 h-full shadow-sm flex flex-col hover:scale-105 transition ease-in-out">
        <figure>
          <img src={connectImg} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col justify-between flex-1">
          <h2 className="card-title text-primary font-bold">
            {skills.skillName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="flex gap-1 items-center text-[20px] text-accent font-semibold">
            <RxAvatar />
            {skills.providerName}
          </div>

          <div className="flex justify-between my-2 text-xl text-accent">
            <div className="flex items-center  gap-1 ">
              <BiSolidCategory className="border rounded-full p-0.5" />
              {skills.category}
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="border rounded-full p-0.5 " />
              {skills.rating}
            </div>

            <div className="flex items-center gap-1">
              <PiSeatbeltFill className="border rounded-full p-0.5 " />
              <p>Slot:{skills.slotsAvailable}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl text-primary">${skills.price}</p>
            <Link
              to={`/skills/${skills.skillId}`}
              className="btn btn-secondary w-fit"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
