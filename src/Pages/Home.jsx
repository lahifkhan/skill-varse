import React from "react";
import Hero from "../Components/Hero";
import Mycontainer from "../Components/Mycontainer";

const Home = () => {
  return (
    <div>
      <div className="text-center my-11 space-y-2">
        <h1 className="font-bold  text-5xl">
          <span className="text-secondary">Skill</span> Varse -{" "}
          <span className="text-primary">
            Empower Your <br />
            Learning Journey
          </span>
        </h1>
        <p className="text-accent font-bold text-xl">
          Share what you know. Learn what you love.
        </p>
      </div>
      <Mycontainer>
        <Hero></Hero>
      </Mycontainer>
    </div>
  );
};

export default Home;
