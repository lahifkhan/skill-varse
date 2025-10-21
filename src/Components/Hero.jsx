// src/components/Hero.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import learnSkillImg from "../assets/learnSkills.jpg";

import connectImg from "../assets/stayConnect.jpg";
import exchangeImg from "../assets/skillExchange.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: learnSkillImg,
      text: "Learn and Share Skills Locally",
    },
    {
      id: 2,
      image: connectImg,
      text: "Trade Knowledge, Build Connections",
    },
    {
      id: 3,
      image: exchangeImg,
      text: "Grow Together Through Skill Exchange",
    },
  ];

  return (
    <div className="w-full h-[70vh] md:h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-[#EDFBF8] bg-cover bg-center flex gap-4 items-center justify-center  text-2xl md:text-6xl font-bold p-8"
              // style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex-1">
                <img className="rounded-2xl" src={slide.image} alt="" />
              </div>
              <div className=" text-primary bg-opacity-40 p-4 rounded flex-1">
                {slide.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
