import React from "react";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineScreenShare } from "react-icons/md";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="px-2 md:px-16 mt-20 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
        {/* LEFT IMAGES */}
        <div className="relative w-full flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-md w-[540px] h-[460px] bg-base-200">
            <img
              src="https://i.postimg.cc/66MqwtjK/about2.png"
              alt="Professional Mechanic"
              className="object-cover w-full h-full"
            />
          </div>

          <div
            className="absolute bottom-[-35px] right-[-10px] md:right-[-5px] 
                          rounded-xl overflow-hidden shadow-xl 
                          w-[320px] h-[260px] bg-base-100"
          >
            <img
              src="https://i.postimg.cc/9MF2Nqjj/about1.png"
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-base-content">
          <p className="text-primary font-bold text-xl mb-2">About Us</p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            We Always Ensure <br /> Best Course <br /> For Your Learning
          </h2>

          <p className="text-base-content/70 mb-4">
            We are dedicated to providing high-quality, accessible education
            with flexible schedules. Our courses are designed by experienced
            instructors to ensure practical skill acquisition and foster a
            dynamic learning community for all our students.
          </p>

          {/* FEATURES */}
          <div className="space-y-6 mb-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-purple-500 mr-4">
                <MdOutlineScreenShare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-base-content">
                  Sharing A Screen
                </h4>
                <p className="text-base-content/70 text-sm">
                  Facilitate real-time collaboration and clear instruction
                  through seamless screen sharing, ensuring students easily
                  follow demonstrations and complex concepts.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-primary mr-4">
                <FiMonitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-base-content">
                  Presenter Control
                </h4>
                <p className="text-base-content/70 text-sm">
                  Empower instructors with full control over the learning
                  environment. Manage participant interaction, mute/unmute
                  options, and maintain an organized, focused virtual classroom.
                </p>
              </div>
            </div>
          </div>

          <Link
            to={"/about"}
            className="btn btn-secondary text-secondary-content px-6"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
