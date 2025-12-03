import { FaSearch } from "react-icons/fa";

const Banner2 = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffe9e9] via-[#f6f4ff] to-[#e8fffb] py-2">
      <div className="w-11/12 mx-auto md:h-[75vh] py-20 px-6 md:px-16  rounded-b-3xl overflow-hidden">
        <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              Learn & Get Certificates
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4">
              Free Online Courses <br /> With Certificates & <br /> Diplomas
            </h1>

            <p className="text-gray-600 mt-4">
              25 Million Learners. 15 Years. 100% Free Education.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-6 flex items-center bg-base-100 shadow-md rounded-full p-2 max-w-md">
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="flex-1 px-4 outline-none"
              />
              <button className="bg-primary text-white p-3 rounded-full">
                <FaSearch size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center">
            {/* Small dots decorations */}
            <span className="absolute top-5 left-20 w-3 h-3 rounded-full bg-red-500"></span>
            <span className="absolute bottom-24 right-10 w-3 h-3 rounded-full bg-green-500"></span>
            <span className="absolute bottom-8 left-10 w-2 h-2 rounded-full bg-orange-400"></span>

            {/* IMAGE WRAPPERS */}
            <div className="flex items-end gap-6">
              {/* Left Image */}
              <div className="w-44 h-64 md:w-52 md:h-82 bg-white rounded-[80px] overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://i.postimg.cc/fLBVQ65V/thumb-1-2-800b1ce43c2f9d188ca8-png.png"
                  alt="student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Image */}
              <div className="relative w-48 h-72 md:w-60 md:h-95 bg-white rounded-[90px] overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://i.postimg.cc/j5X7dWqx/thumb-1-1-79a0034cf9029854151f-png.png"
                  alt="student"
                  className="w-full h-full object-cover"
                />

                {/* Success Courses Tag */}
                <div className="absolute bottom-4 right-2 bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="text-primary font-bold text-lg">5.8k</span>
                  <span className="text-gray-600 text-sm">Success Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
