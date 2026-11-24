import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          Academic foundation in Computer Science &amp; Engineering, Data Structures, and Software Development.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-40 sm:mr-40 ml-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-5">
                {/* School Logo/Image */}
                <div className="w-16 h-16 rounded-2xl p-1.5 bg-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-purple-400 mt-0.5">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date */}
                  <p className="text-xs font-medium text-gray-400 mt-1.5">
                    {edu.date}
                  </p>
                </div>
              </div>

              <div className="mt-4 inline-block bg-purple-950/80 border border-purple-800/60 rounded-lg px-3 py-1">
                <span className="text-xs font-bold text-purple-300">
                  Grade / Score: {edu.grade}
                </span>
              </div>

              <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
