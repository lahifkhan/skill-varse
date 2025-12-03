import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SkillsCard from "../Components/SkillsCard";
import Mycontainer from "../Components/Mycontainer";
import { FaSortAmountDown, FaSortAmountUp, FaStar } from "react-icons/fa";

const AllSkills = () => {
  const skillsData = useLoaderData();

  const [sortType, setSortType] = useState("default");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [rating, setRating] = useState("all");
  const [maxPrice, setMaxPrice] = useState(200);

  // Extract unique category list
  const categories = ["all", ...new Set(skillsData.map((c) => c.category))];

  // Filter + Sorting Logic
  const getFilteredData = () => {
    let filtered = [...skillsData];

    // Search Filter
    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.skillName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Rating Filter
    if (rating !== "all") {
      filtered = filtered.filter((item) => item.rating >= Number(rating));
    }

    // Price Range Filter
    filtered = filtered.filter((item) => item.price <= maxPrice);

    // Sorting
    if (sortType === "asc") filtered.sort((a, b) => a.price - b.price);
    if (sortType === "desc") filtered.sort((a, b) => b.price - a.price);
    if (sortType === "nameAsc")
      filtered.sort((a, b) => a.skillName.localeCompare(b.skillName));
    if (sortType === "nameDesc")
      filtered.sort((a, b) => b.skillName.localeCompare(a.skillName));

    return filtered;
  };

  const finalSkills = getFilteredData();

  return (
    <Mycontainer>
      <div className="text-center mt-10 mb-8">
        <p className="text-primary font-semibold tracking-wide uppercase">
          Explore Skills
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Discover Courses to Boost Your Career
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Browse through our collection of professional skills and courses.
          Filter, sort, and explore the perfect learning path to upgrade
          yourself.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 mb-8">
        {/* ---------------- LEFT  FILTER PANEL ---------------- */}
        <div className="md:w-1/6">
          <div className=" top-24 bg-white shadow-md p-5 rounded-xl h-fit">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/*  Search */}
            <div className="mb-6">
              <p className="font-medium mb-2">Search</p>
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-primary input-bordered w-full"
              />
            </div>

            {/*  Category Filter */}
            <div className="mb-6">
              <p className="font-medium mb-2">Category</p>
              <select
                className="select select-bordered select-primary w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/*  Rating Filter */}
            <div className="mb-6">
              <p className="font-medium mb-2">Rating</p>
              <select
                className="select select-bordered select-primary w-full"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="4">4★ & Above</option>
                <option value="4.5">4.5★ & Above</option>
                <option value="5">5★ Only</option>
              </select>
            </div>

            {/*  Price Range */}
            <div className="mb-6">
              <p className="font-medium mb-2">Max Price: ${maxPrice}</p>
              <input
                type="range"
                min="10"
                max="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="range range-primary"
              />
            </div>

            {/* ↕ Sort */}
            <div className="mb-6">
              <p className="font-medium mb-2">Sort By</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSortType("asc")}
                  className="btn btn-outline btn-primary btn-sm flex items-center gap-2"
                >
                  <FaSortAmountUp /> Price — Low to High
                </button>

                <button
                  onClick={() => setSortType("desc")}
                  className="btn btn-outline btn-primary btn-sm flex items-center gap-2"
                >
                  <FaSortAmountDown /> Price — High to Low
                </button>

                <button
                  onClick={() => setSortType("nameAsc")}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  A → Z
                </button>

                <button
                  onClick={() => setSortType("nameDesc")}
                  className="btn btn-outline btn-primary btn-sm"
                >
                  Z → A
                </button>
              </div>
            </div>

            {/*  Reset */}
            <button
              onClick={() => {
                setSortType("default");
                setSearch("");
                setCategory("all");
                setRating("all");
                setMaxPrice(200);
              }}
              className="btn btn-primary btn-sm w-full mt-4"
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* ---------------- RIGHT SIDE CONTENT GRID ---------------- */}
        <div className="md:w-5/6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {finalSkills.map((skills) => (
              <SkillsCard key={skills.skillId} skills={skills} />
            ))}
          </div>
        </div>
      </div>
    </Mycontainer>
  );
};

export default AllSkills;
