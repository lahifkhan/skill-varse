import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Event = () => {
  return (
    <div className="relative bg-base-100 py-20 mb-8 mt-20">
      {/* RIGHT SIDE DASHED BORDER */}
      <div className="absolute top-0 right-0 h-full border-r-2 border-dashed border-blue-400"></div>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
        {/*  LEFT CONTENT COLUMN */}
        <div className="relative">
          {/* Chevron Pattern */}
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-4 h-1 bg-gray-300 rotate-45"></div>
            ))}
          </div>

          {/* Sub Heading */}
          <p className="text-teal-500 font-semibold text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
            EXPLORE EVENTS
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mt-3 leading-tight">
            Our Best Upcoming Events
          </h1>

          {/* Description */}
          <p className="text-base-content/70 mt-6">
            Join our most anticipated educational and networking events designed
            to elevate your skills and career.** Discover workshops, seminars,
            and conferences led by industry experts across various fields.
          </p>
          <p className="text-base-content/70 mt-3">
            Don't miss out on these unique opportunities to connect with peers,
            learn the latest trends, and take the next step in your professional
            journey. Reserve your spot today!
          </p>

          {/* CTA Button */}
          <Link
            to={"/events"}
            className="mt-7 btn btn-secondary text-white  rounded-full text-lg font-semibold w-fit "
          >
            More Info <FaArrowRight />
          </Link>

          {/* Graduation Cap Outline (Abstract Graphic) */}
          <div className="absolute right-10 bottom-0 opacity-20">
            <svg
              width="140"
              height="140"
              viewBox="0 0 24 24"
              fill="none"
              stroke="teal"
              strokeWidth="1.5"
            >
              <path d="M2 7L12 12L22 7L12 2L2 7Z" />
              <path d="M2 7V12L12 17L22 12V7" />
            </svg>
          </div>
        </div>

        {/*  RIGHT IMAGE COLUMN  */}
        <div className="relative">
          {/* White dotted shapes (top right) */}
          <div className="hidden md:block absolute -top-10 -right-10 md:w-32 md:h-32 bg-white rounded-3xl shadow-lg border border-gray-200 p-4">
            <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:10px_10px] opacity-30 rounded-xl"></div>
          </div>

          <div className="hidden md:block absolute -top-24 right-10 md:w-40 md:h-40 bg-white rounded-full shadow-md border border-gray-200 p-6">
            <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:10px_10px] opacity-20 rounded-full"></div>
          </div>

          {/* Main Image + Yellow Underline */}
          <div className="relative">
            <img
              src="https://i.postimg.cc/sgzw1Rck/1222.jpg"
              alt="event"
              className="w-full h-[420px] object-cover rounded-xl shadow-lg relative z-20"
            />

            {/* Yellow thick line */}
            <div className="absolute -bottom-5 -right-5 w-40 h-4 bg-yellow-400 rounded-full z-10"></div>
          </div>

          {/* Red geometric shapes bottom right */}
          <div className="hidden md:block absolute -bottom-12 -right-10 md:w-36 md:h-36 border-4 border-red-500 rotate-12 rounded-xl"></div>

          <div className="absolute -bottom-20 right-0 bg-white w-20 h-20 rounded-xl shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
