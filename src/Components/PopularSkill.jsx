import React from "react";
import SkillsCard from "./SkillsCard";
import { Link } from "react-router";
import "aos/dist/aos.css";

const PopularSkill = ({ skillsData }) => {
  const popularData = skillsData.slice(0, 4);
  return (
    <div className="px-2 md:px-16 mt-20 pb-8">
      <p
        data-aos="fade-right"
        data-aos-duration="600"
        className="text-primary font-bold text-xl mb-1"
      >
        Top Popular Course
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Explore Featured Courses
        </h1>
        <Link
          data-aos="zoom-in"
          data-aos-delay="200"
          to={"/allSkills"}
          className="btn btn-primary"
        >
          Browse edunity Courses
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
        {popularData.map((skills, idx) => (
          <div
            key={skills.skillId}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <SkillsCard skills={skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSkill;
