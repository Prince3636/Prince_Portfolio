import React from "react";
import { achievements } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaTrophy, FaAward, FaCode } from "react-icons/fa";

const getIcon = (id) => {
  switch (id) {
    case 0:
      return <FaTrophy className="text-yellow-400 text-3xl" />;
    case 1:
      return <FaAward className="text-purple-400 text-3xl" />;
    case 2:
      return <FaCode className="text-cyan-400 text-3xl" />;
    default:
      return <FaTrophy className="text-purple-400 text-3xl" />;
  }
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-[6vw] md:px-[8vw] lg:px-[14vw] font-sans relative"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          ACHIEVEMENTS &amp; LEADERSHIP
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Key competitive recognitions, national hackathon leadership, and problem-solving milestones.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <Tilt
            key={item.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.03}
            transitionSpeed={500}
            gyroscope={true}
            className="border border-gray-800 bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] hover:border-purple-500/60 transition duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-center">
                  {getIcon(item.id)}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/50">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <h4 className="text-sm font-medium text-purple-400 mb-4">
                {item.subtitle}
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
