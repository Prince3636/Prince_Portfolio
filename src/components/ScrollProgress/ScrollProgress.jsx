import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(130,69,236,0.5)] border border-purple-400/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-md"
        >
          <FaArrowUp size={14} />
        </button>
      )}
    </>
  );
};

export default ScrollProgress;
