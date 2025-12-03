import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventsCard = ({ event }) => {
  const { image, date, month, title, description, time, location } = event;
  return (
    <div className="bg-base-100 rounded-t-xl rounded-b-3xl shadow-md overflow-hidden max-w-sm">
      {/* Image with Date Badge */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-yellow-400 rounded-lg w-16 h-16 flex flex-col items-center justify-center shadow-md">
          <span className="text-lg font-bold text-gray-900">{date}</span>
          <span className="text-xs font-semibold text-gray-800">{month}</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-lg lg:text-xl font-bold text-gray-900">{title}</h3>
        {/* Description */}
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Metadata */}
        <div className="flex justify-start items-center gap-6 mt-2 text-gray-500 text-xs">
          <div className="flex items-center gap-1">
            <FaClock className="text-teal-400" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-teal-400" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
