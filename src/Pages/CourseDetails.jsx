import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaUsers, FaBookOpen, FaLanguage } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const courseData = useLoaderData();
  const { skillId } = useParams();
  console.log(skillId);
  console.log(courseData);

  const course = courseData.find((skill) => skill.skillId == skillId);
  console.log(course);

  return (
    <div className="w-11/12 mx-auto px-4 md:px-0 py-10">
      {/* GRID LAYOUT: LEFT CONTENT + RIGHT SIDEBAR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ---------------- LEFT SECTION ---------------- */}
        <div className="md:col-span-2">
          {/* TOP HERO IMAGE */}
          <img
            src={course.image}
            className="w-full h-[380px] rounded-xl object-cover"
            alt="course"
          />

          {/* TITLE + META */}
          <div className="mt-5">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaStar className="text-red-500" />
              <p className="font-medium">{course.rating}</p>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              {course.skillName}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-5 text-gray-600 mt-3 text-sm">
              <p className="flex items-center gap-1">
                <FiClock className="text-primary" /> {course.lessonTime}
              </p>
              <p className="flex items-center gap-1">
                <FaUsers className="text-primary" /> {course.totalStudents}
              </p>
            </div>
          </div>

          {/* ---------------- TABS ---------------- */}
          <div className="mt-10 pb-2 border-b flex gap-6">
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` text-sm font-medium transition 
              ${
                activeTab === tab
                  ? "text-white btn btn-primary rounded-md"
                  : "text-gray-600"
              }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* ---------------- TAB CONTENTS ---------------- */}
          <div className="mt-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-xl font-bold mb-3">COURSE DESCRIPTION</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {course.description}
                </p>

                <h2 className="text-xl font-bold mb-3">
                  WHAT WILL I LEARN FROM THIS COURSE?
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
                      <p className="text-gray-600">{module.lessons} Lessons</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "instructor" && (
              <div>
                <h2 className="text-xl font-bold mb-3">INSTRUCTOR</h2>
                <p className="text-gray-700">{course.instructorDetails.bio}</p>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div className="p-4 bg-white shadow-xl rounded-lg text-center">
                    <FaBookOpen className="mx-auto text-primary text-2xl" />
                    <p className="font-semibold mt-2">
                      {course.instructorDetails.coursesTaught} Courses
                    </p>
                  </div>

                  <div className="p-4 bg-white shadow-xl rounded-lg text-center">
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
                  <div key={i} className=" p-4 rounded-lg shadow-xl mb-4">
                    <p className="font-semibold">{r.user}</p>
                    <p className="text-yellow-500 flex items-center gap-1">
                      <FaStar /> {r.rating}
                    </p>
                    <p className="text-gray-700 mt-2">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ---------------- RIGHT BUY CARD ---------------- */}
        <div className="bg-white shadow-xl  rounded-xl p-6 sticky top-5 h-fit">
          <img
            src="https://i.postimg.cc/MHBCK4N5/course13.png"
            className=" h-60 w-full mx-auto  mb-4"
          />

          <div className="text-center">
            <p className="text-gray-500 line-through text-lg">
              ${course.originalPrice}
            </p>

            <p className="text-4xl font-bold text-primary mb-3">
              ${course.price}
            </p>

            <button className="btn btn-primary w-full rounded-full text-lg mb-3">
              BUY NOW
            </button>

            <p className="text-gray-500 text-sm mb-6">
              {course.moneyBackGuarantee}
            </p>
          </div>

          {/* TABLE */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <p className="font-medium">Time</p>
              <p>{course.classTime}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Start Day</p>
              <p>{course.startTime}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Enrolled</p>
              <p>{course.enrolled}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Lectures</p>
              <p>{course.totalLectures}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Skill Level</p>
              <p>{course.skillLevel}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Language</p>
              <p>{course.language}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
