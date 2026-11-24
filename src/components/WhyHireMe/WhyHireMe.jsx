import React from "react";
import Tilt from "react-parallax-tilt";
import { FaRocket, FaGooglePlay, FaCogs, FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";

const pillars = [
  {
    icon: <FaRocket className="text-purple-400" size={24} />,
    title: "Production Marketplace Shipping",
    tagline: "From Code to Paying Customers",
    desc: "Shipped 247Shop and Asili247 at CommonNext LLP. Integrated Razorpay live payments, built seller dashboards, and connected buyers with neighborhood merchants.",
    badges: ["Razorpay Live", "FCM Push", "REST APIs"],
  },
  {
    icon: <FaGooglePlay className="text-emerald-400" size={24} />,
    title: "Android Packaging & Play Store",
    tagline: "Native Mobile via Capacitor",
    desc: "Converted web apps into Android APKs using Capacitor, configured automated CI/CD workflows via GitHub Actions, and successfully published to the Google Play Store.",
    badges: ["Capacitor", "GitHub Actions CI/CD", "Play Console"],
  },
  {
    icon: <FaCogs className="text-cyan-400" size={24} />,
    title: "WASM & Real-Time WebSockets",
    tagline: "Sub-100ms Latency & Client-Side Compute",
    desc: "Architected client-side WebAssembly video processing (FFmpeg WASM) with zero server uploads, and real-time WebSocket state synchronization for multiplayer and billing platforms.",
    badges: ["WebAssembly", "Socket.io", "TypeScript"],
  },
  {
    icon: <FaChartLine className="text-amber-400" size={24} />,
    title: "Technical SEO & Growth Automation",
    tagline: "Search Visibility & Catalog Sync",
    desc: "Handled full technical SEO audits, Google Search Console, GA4 event tracking, and automated live product catalog feeds syncing with Google Shopping listings.",
    badges: ["GA4 Analytics", "Search Console", "Google Shopping"],
  },
  {
    icon: <FaShieldAlt className="text-pink-400" size={24} />,
    title: "Security & Clean Code Audits",
    tagline: "Robust Auth & Error Boundaries",
    desc: "Implemented JWT in secure HTTP-only cookies, OTP email verification, role-based access control (RBAC), and phase-wise security audits across live applications.",
    badges: ["JWT Security", "RBAC", "Code Audits"],
  },
  {
    icon: <FaUsers className="text-indigo-400" size={24} />,
    title: "Direct Client Collaboration",
    tagline: "Ownership, Standups & On-Time Delivery",
    desc: "Worked directly with clients to gather requirements, demo weekly milestone progress, participate in daily standups, and deliver business-critical features on schedule.",
    badges: ["Agile/Scrum", "Client Demos", "Ownership"],
  },
];

const WhyHireMe = () => {
  return (
    <section
      id="strengths"
      className="py-20 px-[6vw] md:px-[8vw] lg:px-[14vw] font-sans relative"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
          Core Value Proposition
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          WHY RECRUITERS &amp; TEAMS CHOOSE ME
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Here is how I bridge the gap between frontend, backend, native mobile, and production business impact.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((item, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={500}
            gyroscope={true}
            className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800/90 hover:border-purple-500/60 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.12)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <h4 className="text-xs font-semibold text-purple-400 mb-3">
                {item.tagline}
              </h4>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                {item.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/70">
              {item.badges.map((b, bIdx) => (
                <span
                  key={bIdx}
                  className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md bg-purple-950/50 text-purple-300 border border-purple-900/40"
                >
                  {b}
                </span>
              ))}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default WhyHireMe;
