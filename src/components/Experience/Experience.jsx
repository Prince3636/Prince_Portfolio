import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          WORK EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          A track record of shipping production web and Android marketplace systems, automating DevOps, and delivering client results.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-40 sm:mr-40 ml-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50`}
            >
              {/* Flex container for logo and text */}
              <div className="flex items-center space-x-5">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 rounded-2xl p-1 bg-[#0c091f] border border-purple-800/40 shadow-inner flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-purple-400 mt-0.5">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-xs font-medium text-gray-400 mt-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-gray-300 text-xs sm:text-sm leading-relaxed">
                {experience.desc}
              </p>

              <div className="mt-5 pt-4 border-t border-gray-800">
                <h5 className="font-semibold text-xs text-gray-400 uppercase tracking-wider mb-2">
                  Key Technologies:
                </h5>
                <ul className="flex flex-wrap gap-1.5">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-purple-950/60 text-purple-300 px-3 py-1 text-xs rounded-lg border border-purple-900/50 font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
