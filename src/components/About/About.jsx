import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import { FaDownload, FaEye, FaPaperPlane, FaGooglePlay, FaCode, FaRocket, FaBriefcase } from "react-icons/fa";

const stats = [
  { icon: <FaBriefcase className="text-purple-400" />, value: "5+ Months", label: "Production Exp (CommonNext)" },
  { icon: <FaRocket className="text-pink-400" />, value: "8+ Shipped", label: "Web & Mobile Applications" },
  { icon: <FaGooglePlay className="text-emerald-400" />, value: "1 Published", label: "Android App on Google Play" },
  { icon: <FaCode className="text-cyan-400" />, value: "100+ Solved", label: "DSA Problems (LeetCode/GFG)" },
];

const About = ({ onOpenResume }) => {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-6 px-[6vw] md:px-[8vw] lg:px-[14vw] font-sans mt-8 md:mt-14 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-3/5 text-center md:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Full-Time Roles &amp; Remote Opportunities</span>
          </div>

          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-2 leading-tight">
            Hi, I'm
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Prince Kumar
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Production App Builder",
                2000,
                "React & Node.js Specialist",
                2000,
                "Android (Capacitor) Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-[#a855f7]"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Full Stack Developer with hands-on experience shipping production marketplace applications on web and Android using <span className="text-purple-300 font-medium">React.js, Node.js, Express.js, Firebase, and Capacitor</span>. Integrated Razorpay live payments, built scalable REST APIs, automated CI/CD builds with GitHub Actions, and published apps on Google Play Store with technical SEO &amp; Google Shopping catalog sync.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 mb-10">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 text-white py-3 px-6 rounded-full text-xs sm:text-sm font-bold transition duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(130,69,236,0.5)]"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
              }}
            >
              <FaEye size={13} />
              <span>PREVIEW RESUME</span>
            </button>

            <a
              href="/Prince_Kumar_Resume.pdf"
              download="Prince_Kumar_Resume.pdf"
              className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800 text-purple-300 hover:text-white py-3 px-5 rounded-full text-xs sm:text-sm font-bold border border-purple-700/60 transition duration-300 transform hover:scale-105"
            >
              <FaDownload size={12} />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={handleScrollToContact}
              className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white py-3 px-5 rounded-full text-xs sm:text-sm font-bold border border-gray-700 transition duration-300 transform hover:scale-105"
            >
              <FaPaperPlane size={11} />
              <span>GET IN TOUCH</span>
            </button>
          </div>
        </div>

        {/* Right Side Avatar */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <Tilt
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-purple-600/80 rounded-full p-2 bg-gradient-to-tr from-purple-900/50 to-indigo-900/30 shadow-[0_0_35px_rgba(130,69,236,0.4)]"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={600}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Prince Kumar"
              className="w-full h-full rounded-full object-cover shadow-2xl"
            />
          </Tilt>
        </div>
      </div>

      {/* Hero Stats Highlight Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-6 border-t border-gray-800/80">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-gray-900/80 border border-gray-800/90 hover:border-purple-500/50 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-lg mb-3">
              {item.icon}
            </div>
            <div className="text-xl sm:text-2xl font-black text-white mb-0.5">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
