import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFileAlt, FaTerminal } from "react-icons/fa";

const Navbar = ({ onOpenResume, onOpenTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "strengths", label: "Strengths" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="text-lg sm:text-xl font-bold cursor-pointer flex items-center tracking-wide group"
        >
          <span className="text-[#8245ec] transition-transform group-hover:-translate-x-0.5">&lt;</span>
          <span className="text-white font-extrabold">Prince</span>
          <span className="text-[#8245ec] mx-0.5">/</span>
          <span className="text-gray-200">Kumar</span>
          <span className="text-[#8245ec] transition-transform group-hover:translate-x-0.5">&gt;</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-5 lg:space-x-7 text-xs sm:text-sm font-medium text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-200 hover:text-purple-400 ${
                  activeSection === item.id ? "text-purple-400 font-semibold" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Action Area */}
        <div className="hidden md:flex items-center space-x-3.5">
          <button
            onClick={onOpenTerminal}
            title="Open Interactive CLI Terminal"
            className="flex items-center gap-1.5 bg-gray-900/90 hover:bg-gray-800 text-purple-300 hover:text-white text-xs font-mono font-bold py-1.5 px-3 rounded-full border border-purple-500/40 transition shadow-sm"
          >
            <FaTerminal size={10} />
            <span>CLI</span>
          </button>

          <a
            href="https://github.com/Prince3636"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/prince3636/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <FaLinkedin size={19} />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-[0_0_15px_rgba(130,69,236,0.4)] transition transform hover:scale-105"
          >
            <FaFileAlt size={11} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center space-x-2.5">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1 bg-gray-900 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold py-1 px-2.5 rounded-full"
          >
            <FaTerminal size={9} />
            <span>CLI</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 bg-purple-600 text-white text-xs font-bold py-1 px-2.5 rounded-full shadow-sm"
          >
            <FaFileAlt size={10} />
            <span>CV</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-purple-400 focus:outline-none p-1"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-4 right-4 bg-[#0a071c]/95 border border-gray-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
          <ul className="flex flex-col space-y-3.5 text-center text-sm font-semibold text-gray-200">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`py-1 w-full hover:text-purple-400 transition ${
                    activeSection === item.id ? "text-purple-400 font-bold" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center space-x-6 pt-5 mt-4 border-t border-gray-800">
            <a
              href="https://github.com/Prince3636"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/prince3636/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
