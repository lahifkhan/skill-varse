import Hero from "../Components/Hero";
import Mycontainer from "../Components/Mycontainer";
import { useLoaderData } from "react-router";
import PopularSkill from "../Components/PopularSkill";
import TopProvider from "../Components/TopProvider";
import HowItWork from "../Components/HowItWork";
import { Authcontext } from "../Context/AuthContext";
import "animate.css";
import Achievement from "../Components/Achievement";
import AboutUs from "../Components/AboutUs";
import FavouriteTopic from "../Components/Home/FavouriteTopic";
import Stat from "../Components/Home/Stat";

const Home = () => {
  const skillsData = useLoaderData();

  console.log(skillsData);
  return (
    <div>
      {/* <div className="text-center my-11 space-y-2">
        <h1 className="animate__animated animate__bounce font-bold text-2xl  md:text-4xl">
          <span className="text-secondary">Skill</span> Varse -{" "}
          <span className="text-primary">
            Empower Your <br />
            Learning Journey
          </span>
        </h1>
        <p className="text-accent font-bold text-xl">
          Share what you know. Learn what you love.
        </p>
      </div> */}
      <Mycontainer>
        {/* slider */}
        <Hero></Hero>
        <FavouriteTopic></FavouriteTopic>

        <AboutUs></AboutUs>
      </Mycontainer>

      <Stat></Stat>

      <Mycontainer>
        {/* popular skills */}
        <section className="popularSkill my-[120px]">
          <PopularSkill skillsData={skillsData}></PopularSkill>
        </section>
      </Mycontainer>

      {/* Top rated Provider  */}
      <TopProvider skillsData={skillsData}></TopProvider>

      {/* Achievement  */}

      <Achievement></Achievement>

      {/* how it work */}
      <Mycontainer>
        <HowItWork></HowItWork>
      </Mycontainer>
    </div>
  );
};

export default Home;
