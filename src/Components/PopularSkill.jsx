import React from "react";
import SkillsCard from "./SkillsCard";

const PopularSkill = ({ skillsData }) => {
  const popularData = skillsData.slice(0, 4);
  return (
    <div className="px-2 md:px-16">
      <p className="text-primary font-bold text-xl mb-1"> Top Popular Course</p>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row  justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Explore Featured Courses
        </h1>
        <button className="btn btn-primary">Browse edunity Courses</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
        {popularData.map((skills) => (
          <SkillsCard key={skills.skillId} skills={skills}></SkillsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularSkill;
