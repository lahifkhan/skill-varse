import React from "react";
import SkillsCard from "./SkillsCard";

const PopularSkill = ({ skillsData }) => {
  const popularData = skillsData.slice(0, 6);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 md:px-16">
      {popularData.map((skills) => (
        <SkillsCard key={skills.skillId} skills={skills}></SkillsCard>
      ))}
    </div>
  );
};

export default PopularSkill;
