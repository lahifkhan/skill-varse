import React from "react";
import Marquee from "react-fast-marquee";

const TopProvider = ({ skillsData }) => {
  const topProvider = skillsData.filter((skill) => skill.rating >= 4.8);
  console.log(topProvider);
  return (
    <div className="my-7">
      <h1 className="text-3xl font-bold text-primary mb-10 text-center">
        Top Provider
      </h1>
      <Marquee pauseOnHover={true} gradient={false}>
        {topProvider.map((provider) => (
          <div className="mx-8 shadow-2xl  text-center p-3 bg-primary text-white rounded-2xl">
            <p>{provider.providerName}</p>
            <p>{provider.providerEmail}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopProvider;
