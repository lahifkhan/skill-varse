import React from "react";
import topic5 from "../../assets/topic/topic5.png";
import topic4 from "../../assets/topic/topic4.png";
import topic3 from "../../assets/topic/topic3.png";
import topic2 from "../../assets/topic/topic2.png";
import topic1 from "../../assets/topic/topic1.png";
import { Link } from "react-router";
import "aos/dist/aos.css";

const topics = [
  { img: topic5, title: "Web Design", courses: "08 Courses" },
  { img: topic4, title: "Graphics Design", courses: "15 Courses" },
  { img: topic3, title: "Video Editor", courses: "10 Courses" },
  { img: topic2, title: "Content Writing", courses: "07 Courses" },
  { img: topic1, title: "Marketing", courses: "15 Courses" },
];

const FavouriteTopic = () => {
  return (
    <div className="mt-10 pb-8 px-2 md:px-16">
      <p
        data-aos="fade-right"
        data-aos-duration="600"
        className="text-primary font-bold text-xl mb-2"
      >
        Category
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Favorite topics to learn
        </h1>
        <Link to={"/allSkills"} className="btn btn-primary">
          Browse edunity Courses
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            data-aos-duration="600"
            className="flex flex-col items-center space-y-6 p-4 bg-base-100 rounded-xl shadow-md cursor-pointer"
          >
            <img
              className="w-20 h-20 object-cover"
              src={topic.img}
              alt={topic.title}
            />
            <div className="text-center">
              <h4 className="font-bold">{topic.title}</h4>
              <p className="text-primary">{topic.courses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteTopic;
