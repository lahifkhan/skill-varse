import React from "react";
import { FaBookReader, FaHandshake, FaUserPlus } from "react-icons/fa";

const HowItWork = () => {
  return (
    <div>
      <section className="py-12  text-center">
        <h2 className="text-3xl  text-primary mb-8 font-bold">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-2xl">
            <FaUserPlus size={40} className="text-secondary mb-3" />
            <h3 className="text-xl font-semibold">Sign Up</h3>
            <p className="text-accent mt-2">
              Join SkillVerse and set up your learner or provider profile.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
            <FaHandshake size={40} className="text-secondary mb-3" />
            <h3 className="text-xl font-semibold">Find a Skill</h3>
            <p className="text-accent mt-2">
              Browse local skill listings and connect with the right match.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
            <FaBookReader size={40} className="text-secondary mb-3" />
            <h3 className="text-xl font-semibold">Learn & Share</h3>
            <p className="text-accent mt-2">
              Book a session and start exchanging skills and knowledge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWork;
