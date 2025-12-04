import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";
import "aos/dist/aos.css";

const teamMembers = [
  {
    id: 1,
    name: "Esther Howard",
    role: "Junior Instructor",
    image: "https://i.postimg.cc/ydfH8n0m/member1.png",
  },
  {
    id: 2,
    name: "Beverly Hathcock",
    role: "Senior Instructor",
    image: "https://i.postimg.cc/QdLrCFKJ/member2.png",
  },
  {
    id: 3,
    name: "Donald Gonzales",
    role: "Junior Instructor",
    image: "https://i.postimg.cc/6QcsMzbQ/member3.png",
  },
  {
    id: 4,
    name: "Eddie Lena",
    role: "Junior Instructor",
    image: "https://i.postimg.cc/3NPzkqNt/member4.png",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="w-full pb-8 mt-20 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT SECTION */}
        <div data-aos="fade-right" data-aos-duration="800">
          <button className="px-4 py-2 rounded-full border border-primary text-primary font-medium mb-5">
            OUR INSTRUCTORS
          </button>

          <h2 className="text-4xl font-bold mb-5">
            Meet Our Expert <br /> Instructor
          </h2>

          <p className="text-gray-500 mb-7 max-w-md">
            Our expert instructors are dedicated to helping learners achieve
            real skills through practical guidance, personalized support, and
            years of professional experience in their fields.
          </p>

          <div className="flex gap-4">
            <Link
              data-aos="zoom-in"
              data-aos-delay="100"
              to={"/contact"}
              className="btn btn-primary rounded-full px-6"
            >
              Contact Us
            </Link>
            <Link
              data-aos="zoom-in"
              data-aos-delay="200"
              to={"/allSkills"}
              className="btn btn-outline btn-primary rounded-full px-6"
            >
              Find Courses
            </Link>
          </div>
        </div>

        {/* RIGHT INSTRUCTORS GRID */}
        <div className="grid grid-cols-2 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="w-full relative bg-white rounded-xl shadow-lg border border-purple-200 overflow-hidden hover:shadow-xl duration-300"
            >
              {/* Top Right Icon */}
              <div className="absolute right-3 top-3 z-20 bg-primary text-white p-2 rounded-full">
                <FaShareAlt size={16} />
              </div>

              {/* IMAGE FULL AREA */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[260px] object-cover"
              />

              {/* NAME BOX OVER IMAGE */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-base-100 shadow-lg rounded-xl px-4 py-3 w-[85%] z-20">
                <h3 className="font-semibold text-base-content text-lg">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
