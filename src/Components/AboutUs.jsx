import React from "react";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineScreenShare } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="pt-16 px-2 md:px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        <div className="relative w-full flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-md w-[440px] h-[360px]">
            <img
              src="https://i.postimg.cc/66MqwtjK/about2.png"
              alt="Professional Mechanic"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-[-35px] right-[-10] md:right-[-5px]  rounded-xl overflow-hidden shadow-xl w-[220px] h-[160px] bg-white">
            <img
              src="https://i.postimg.cc/9MF2Nqjj/about1.png"
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <p className="text-primary font-bold text-xl mb-2">About Us</p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            We Are Always Ensure <br /> Best Course
            <br />
            For Your Learning
          </h2>

          <p className="text-gray-600 mb-4">
            We are dedicated to providing high-quality, accessible education
            with flexible schedules. Our courses are designed by experienced
            instructors to ensure practical skill acquisition and foster a
            dynamic learning community for all our students.
          </p>

          <div className="space-y-6 mb-6">
            <div className="flex items-start">
              <div className={`p-3 rounded-lg bg-purple-500 mr-4`}>
                <MdOutlineScreenShare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Sharing A Screen
                </h4>
                <p className="text-gray-600 text-sm">
                  Facilitate real-time collaboration and clear instruction
                  through seamless screen sharing, ensuring students easily
                  follow demonstrations and complex concepts.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className={`p-3 rounded-lg bg-primary mr-4`}>
                <FiMonitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Presenter Control
                </h4>
                <p className="text-gray-600 text-sm">
                  Empower instructors with full control over the learning
                  environment. Manage participant interaction, mute/unmute
                  functions, and maintain an organized, focused virtual
                  classroom.
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary text-white px-6">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
