import { FaLeaf } from "react-icons/fa";

const DetailsAbout = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="w-11/12 mx-auto  px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Images & Experience */}
        <div className="relative flex-1 flex flex-col md:flex-row items-center gap-6">
          {/* Top Image */}
          <div className="w-40 h-40 lg:w-48 lg:h-80 rounded-xl hidden md:block overflow-hidden shadow-lg relative bottom-25">
            <img
              src="https://i.postimg.cc/VvfzYNv8/ed-about-2-1-ac24e50fdc8faa9576d3-png.png"
              alt="Smiling Student"
              className="object-cover w-full h-full "
            />
          </div>
          {/* Bottom Image */}
          <div className="w-full h-full lg:w-60 lg:h-80 rounded-xl  overflow-hidden shadow-lg">
            <img
              src="https://i.postimg.cc/sDSCtSwp/ed-about-2-2-9619c68fdc0abab76a3e-png.png"
              alt="Group Collaboration"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Experience Badge */}
          <div className="absolute  top-80 md:top-[-130px] md:right-40 bg-pink-200 border-4 border-pink-400 rounded-full w-30 h-30 flex flex-col items-center justify-center shadow-xl ">
            <span className="text-3xl font-bold text-red-600">35+</span>
            <span className="text-sm text-red-700">Years Experience</span>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Sub-header */}
          <div className="flex items-center gap-2 text-sm text-teal-400 font-semibold uppercase">
            <FaLeaf className="w-4 h-4" />
            About Us
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content">
            Benefit From Our Online Learning{" "}
            <span className="text-red-600">Professional</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base-content text-gray-600">
            We are committed to providing high-quality online education that
            empowers students to achieve their professional and personal goals.
            Our expert instructors and interactive platform ensure the best
            learning experience.
          </p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-teal-400 font-semibold text-sm uppercase mb-2">
                Our Mission
              </h4>
              <p className="text-gray-600">
                Deliver accessible and comprehensive online learning that equips
                students with the skills needed for a successful career.
              </p>
            </div>
            <div>
              <h4 className="text-teal-400 font-semibold text-sm uppercase mb-2">
                Our Vision
              </h4>
              <p className="text-gray-600">
                Create a global community of lifelong learners committed to
                excellence and innovation in education.
              </p>
            </div>
          </div>

          {/* Call To Action */}
          <button className="btn btn-primary mt-6 w-fit px-8 py-3 rounded-lg">
            Admission Open
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsAbout;
