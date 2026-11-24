import React, { useEffect } from "react";
import { FaDownload, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#0f0c23] border border-purple-500/40 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-800 bg-[#140f2e]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-sm sm:text-base font-bold text-white">
              Prince Kumar — Official Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Prince_Kumar_Resume.pdf"
              download="Prince_Kumar_Resume.pdf"
              className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition shadow-md shadow-purple-600/30"
            >
              <FaDownload size={11} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold py-1.5 px-3 rounded-lg border border-gray-700 transition"
            >
              <FaExternalLinkAlt size={11} />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition"
            >
              <FaTimes size={13} />
            </button>
          </div>
        </div>

        {/* Embedded Resume View */}
        <div className="flex-1 bg-white overflow-hidden">
          <iframe
            src="/resume.html"
            title="Prince Kumar Resume"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
