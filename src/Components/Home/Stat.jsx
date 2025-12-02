import React from "react";
import statBg from "../../assets/banner-background/stat-background.png";

const Stat = () => {
  const stats = [
    { value: "6,879+", label: "Learners & counting" },
    { value: "1,327+", label: "Courses & Video" },
    { value: "1,359+", label: "Certified Students" },
    { value: "1,557+", label: "Registered Enrolls" },
  ];

  return (
    <div
      className="bg-cover bg-center p-6 mt-16"
      style={{
        backgroundImage: `url(${statBg})`,
      }}
    >
      <div className="flex flex-wrap justify-between gap-4 w-11/12 mx-auto px-2 md:px-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-white rounded-full bg-white/10 aspect-square flex-1 min-w-[120px] max-w-[200px] p-4"
          >
            <h4 className="font-bold text-2xl text-white">{stat.value}</h4>
            <p className="text-sm font-semibold text-secondary text-center mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stat;
