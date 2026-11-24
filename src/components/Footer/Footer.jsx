import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-10 px-[6vw] md:px-[8vw] lg:px-[14vw] border-t border-gray-800/80 mt-16 bg-[#040311]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Name / Logo */}
        <div
          onClick={() => handleScroll("about")}
          className="text-xl font-bold cursor-pointer inline-flex items-center tracking-wide group mb-2"
        >
          <span className="text-[#8245ec] transition-transform group-hover:-translate-x-0.5">&lt;</span>
          <span className="text-white font-extrabold">Prince</span>
          <span className="text-[#8245ec] mx-0.5">/</span>
          <span className="text-gray-200">Kumar</span>
          <span className="text-[#8245ec] transition-transform group-hover:translate-x-0.5">&gt;</span>
        </div>

        <p className="text-xs text-gray-400 mt-1">
          Full Stack Developer • Shipped Production Marketplaces &amp; Android Apps
        </p>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Strengths", id: "strengths" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Achievements", id: "achievements" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 text-xs sm:text-sm text-gray-300 font-medium transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-5 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Prince3636" },
            { icon: <FaTwitter />, link: "https://x.com/PyPrince46394" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prince3636/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/m__prince__13/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Prince Kumar. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
