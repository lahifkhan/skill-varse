import React from "react";
import { useLoaderData } from "react-router";
import EventsCard from "../Components/EventsCard";

const AllEvents = () => {
  const eventsData = useLoaderData();
  console.log(eventsData);
  return (
    <div>
      <div className="text-center mt-10 mb-8">
        <p className="text-primary font-semibold tracking-wide uppercase">
          Upcoming Events
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Join Events to Enhance Your Learning Experience
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Check out our latest events, workshops, and webinars. Participate,
          learn from experts, and connect with a community of passionate
          learners.
        </p>
      </div>

      <div className=" w-11/12 mx-auto gap-6 grid grid-cols-1 md:grid-cols-4 mt-10 mb-8">
        {eventsData.map((event) => (
          <EventsCard key={event.id} event={event}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
