import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-[8vw] md:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          SKILLS & EXPERTISE
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A collection of my technical skills and practical competencies developed across production applications and open-source projects.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            scale={1.02}
            transitionSpeed={500}
            gyroscope={true}
            className="bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-800 shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/50 transition duration-300"
          >
            <div>
              {/* Category Title */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-950/70 text-purple-300 border border-purple-800/40">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Flexible Pills */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 bg-gray-800/80 hover:bg-gray-800 border border-gray-700/80 hover:border-purple-500/80 rounded-xl py-2 px-3.5 transition-all duration-300 hover:scale-105 shadow-sm group"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-200 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
