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
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Skills
        </h2>
        <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A collection of my technical skills and expertise developed through projects and practical experience.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1200}
            scale={1.02}
            transitionSpeed={600}
            gyroscope={true}
            className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg p-6 sm:p-8"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl py-2 px-3 hover:border-purple-500 transition duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;