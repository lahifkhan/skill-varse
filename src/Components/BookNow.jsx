import React from "react";
import toast from "react-hot-toast";

const BookNow = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking Successfull");
    e.target.reset();
  };
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-center font-bold text-2xl text-primary my-5">
        Book Now
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleBooking}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Your Name"
                name="name"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input placeholder:text-gray-400"
                placeholder="Email"
                name="email"
                required
              />

              <button className="btn btn-secondary mt-4 text-xl">Book</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
