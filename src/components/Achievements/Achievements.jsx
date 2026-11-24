import React from "react";
import { achievements } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaTrophy, FaAward, FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

      {/* Live GitHub Contributions Heatmap Banner */}
      <div className="border border-gray-800 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(130,69,236,0.15)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2.5">
              <FaGithub className="text-purple-400 text-2xl" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Live GitHub Contributions &amp; Code Activity
              </h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Real-time commit calendar tracking daily coding consistency across 25+ repositories.
            </p>
          </div>

          <a
            href="https://github.com/Prince3636"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-bold transition shadow-md shadow-purple-600/25"
          >
            <span>Follow @Prince3636</span>
            <FaExternalLinkAlt size={10} />
          </a>
        </div>

        {/* Heatmap Graphic Container */}
        <div className="overflow-x-auto py-2">
          <img
            src="https://ghchart.rshah.org/8245ec/Prince3636"
            alt="Prince Kumar's GitHub Contributions Chart"
            className="w-full min-w-[700px] h-auto rounded-lg filter contrast-125"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 text-xs text-gray-400 pt-3 border-t border-gray-800/60">
          <span>Profile: <span className="text-white font-mono">github.com/Prince3636</span></span>
          <span className="text-purple-300">Active Open-Source Projects • Real-Time Web &amp; Android Apps</span>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
