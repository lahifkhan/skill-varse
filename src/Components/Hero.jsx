import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import learnSkillImg from "../assets/learnSkills.jpg";
import connectImg from "../assets/stayConnect.jpg";
// import exchangeImg from "../assets/skillExchange.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: learnSkillImg,
      title: "Learn and Share Skills",
      highlight: "Locally",
      description:
        "Find local skill-learning opportunities and connect with nearby mentors.",
      buttonText: "Find Skills",
    },
    {
      id: 2,
      image: connectImg,
      title: "Trade Knowledge,",
      highlight: "Build Connections",
      description:
        "Exchange your skills with others and grow a meaningful network.",
      buttonText: "Join Network",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/wT08KT9w/2147657357.jpg",
      title: "Grow Together Through",
      highlight: "Skill Exchange",
      description:
        "Collaborate, learn, and develop your skills with community support.",
      buttonText: "Start Exchange",
    },
  ];

  return (
    <div className="w-full h-[50vh] md:h-[70vh] rounded-2xl px-2 md:px-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="absolute inset-0 bg-black/60 rounded-2xl" />

            <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
              <div className="text-white w-full md:w-1/2 lg:w-2/5">
                <p className="text-sm tracking-widest uppercase mb-2">
                  WELCOME TO ONLINE SKILL COURSES
                </p>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.title}{" "}
                  <span className="text-secondary">{slide.highlight}</span>
                </h1>

                <p className="text-base mb-8 max-w-md">{slide.description}</p>

                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
