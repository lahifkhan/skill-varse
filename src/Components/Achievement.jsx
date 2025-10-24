import React from "react";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";
import Mycontainer from "./Mycontainer";
import "aos/dist/aos.css";
const Achievement = () => {
  return (
    <Mycontainer>
      <div className="py-16">
        <div className="text-center">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="800"
            className="text-4xl font-bold text-primary mb-10"
          >
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* achive */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-base-100 rounded-2xl space-y-2 shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ease-in-out"
            >
              <FaUsers size={48} className="text-primary mb-4" />
              <h3 className="text-3xl font-bold text-secondary">10K+</h3>
              <p className="text-lg font-semibold">Active Learners</p>
              <p className="text-sm text-gray-500">
                Empowering students worldwide with quality courses.
              </p>
            </div>

            {/* instructor */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-base-100 sapce-y-2 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ease-in-out"
            >
              <FaChalkboardTeacher size={48} className=" text-secondary mb-4" />
              <h3 className="text-3xl font-bold text-secondary">500+</h3>
              <p className="text-lg font-semibold ">Expert Instructors</p>
              <p className="text-sm text-gray-500">
                Skilled mentors guiding learners every step of the way.
              </p>
            </div>

            {/* courses */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-base-100 space-y-2 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ease-in-out"
            >
              <FaBookOpen size={48} className=" text-primary mb-4" />
              <h3 className="text-3xl font-bold text-secondary">1K+</h3>
              <p className="text-lg font-semibold ">Courses Available</p>
              <p className="text-sm text-gray-500">
                From tech to creativity explore your interests freely.
              </p>
            </div>

            {/* ratings */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-base-100 space-y-2 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ease-in-out"
            >
              <FaStar size={48} className=" text-yellow-400 mb-4" />
              <h3 className="text-3xl font-bold text-secondary">4.9/5</h3>
              <p className="text-lg font-semibold">User Rating</p>
              <p className="text-sm text-gray-500">
                Trusted and loved by learners around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Mycontainer>
  );
};

export default Achievement;
