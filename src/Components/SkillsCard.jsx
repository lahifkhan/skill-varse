import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillsCard = ({ skills }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-purple-200 overflow-hidden hover:shadow-xl duration-300">
      {/* Image */}
      <div>
        <img
          src={skills.image}
          alt="course"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      {/* FIXED HEIGHT + FLEX = perfect alignment */}
      <div className="p-5 flex flex-col justify-between h-[200px]">
        {/* Rating + Price */}
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-red-500 font-medium">
            <FaStar /> <span>{skills.rating}</span>k
          </p>
          <p className="text-primary font-semibold text-lg">${skills.price}</p>
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg leading-snug line-clamp-2">
          {skills.skillName}
        </h2>

        {/* Button ALWAYS bottom */}
        <div className="flex justify-end">
          <Link
            to={`/skills/${skills.skillId}`}
            className="btn btn-primary btn-sm rounded-full px-6"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
