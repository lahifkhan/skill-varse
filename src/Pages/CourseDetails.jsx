import React, { useState } from "react";
import { FaStar, FaUsers, FaBookOpen } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const courseData = useLoaderData();
  const { skillId } = useParams();
  const course = courseData.find((skill) => skill.skillId == skillId);

  return (
    <div className="w-11/12 mx-auto  py-10 text-base-content">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <img
            src={course.image}
            className="w-full h-[380px] rounded-xl object-cover"
            alt="course"
          />

          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2">
              <FaStar className="text-warning" />
              <p className="font-medium">{course.rating}</p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">
              {course.skillName}
            </h1>

            <div className="flex items-center gap-5 text-base-content/70 text-sm">
              <p className="flex items-center gap-1">
                <FiClock className="text-primary" /> {course.lessonTime}
              </p>
              <p className="flex items-center gap-1">
                <FaUsers className="text-primary" /> {course.totalStudents}
              </p>
            </div>
          </div>

          {/* TABS */}
          <div className="mt-10 border-b border-base-content/20 flex gap-4 pb-2">
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition 
                  ${
                    activeTab === tab
                      ? "bg-primary text-primary-content"
                      : "text-base-content/60 hover:text-base-content"
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-xl font-bold mb-3">COURSE DESCRIPTION</h2>
                <p className="text-base-content/80 leading-relaxed mb-8">
                  {course.description}
                </p>

                <h2 className="text-xl font-bold mb-3">
                  WHAT WILL I LEARN FROM THIS COURSE?
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                  {course.whatWillILearn.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div>
                <h2 className="text-xl font-bold mb-3">CURRICULUM</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, i) => (
                    <div
                      key={i}
                      className="border border-primary p-4 rounded-md shadow-sm flex justify-between"
                    >
                      <p className="font-semibold">
                        Module {module.module}: {module.title}
                      </p>
                      <p className="text-base-content/70">
                        {module.lessons} Lessons
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "instructor" && (
              <div>
                <h2 className="text-xl font-bold mb-3">INSTRUCTOR</h2>
                <p className="text-base-content/80">
                  {course.instructorDetails.bio}
                </p>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div className="p-4 bg-base-200 shadow-lg rounded-lg text-center">
                    <FaBookOpen className="mx-auto text-primary text-2xl" />
                    <p className="font-semibold mt-2">
                      {course.instructorDetails.coursesTaught} Courses
                    </p>
                  </div>

                  <div className="p-4 bg-base-200 shadow-lg rounded-lg text-center">
                    <FaUsers className="mx-auto text-primary text-2xl" />
                    <p className="font-semibold mt-2">
                      {course.instructorDetails.totalStudents}+ Students
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h2 className="text-xl font-bold mb-5">REVIEWS</h2>
                {course.reviews.map((r, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg shadow-lg bg-base-200 mb-4"
                  >
                    <p className="font-semibold">{r.user}</p>
                    <p className="text-warning flex items-center gap-1">
                      <FaStar /> {r.rating}
                    </p>
                    <p className="text-base-content/80 mt-2">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-base-100 shadow-xl rounded-xl p-6 sticky top-5 h-fit text-base-content">
          <img
            src="https://i.postimg.cc/MHBCK4N5/course13.png"
            className="h-60 w-full rounded-md object-cover mb-5"
            alt="course"
          />

          <div className="text-center">
            <p className="line-through text-base-content/60 text-lg">
              ${course.originalPrice}
            </p>

            <p className="text-4xl font-bold text-primary mb-3">
              ${course.price}
            </p>

            <button className="btn btn-primary w-full rounded-full text-lg mb-3">
              BUY NOW
            </button>

            <p className="text-base-content/60 text-sm mb-6">
              {course.moneyBackGuarantee}
            </p>
          </div>

          {/* DETAILS LIST */}
          <div className="space-y-3 text-sm">
            {[
              ["Time", course.classTime],
              ["Start Day", course.startTime],
              ["Enrolled", course.enrolled],
              ["Lectures", course.totalLectures],
              ["Skill Level", course.skillLevel],
              ["Language", course.language],
            ].map(([label, value], i) => (
              <div className="flex justify-between" key={i}>
                <p className="font-medium">{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
