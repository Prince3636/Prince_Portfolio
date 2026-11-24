import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import WhyHireMe from "./components/WhyHireMe/WhyHireMe";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ResumeModal from "./components/ResumeModal/ResumeModal";
import Terminal from "./components/Terminal/Terminal";
import { FaTerminal } from "react-icons/fa";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="bg-[#050414] min-h-screen text-slate-100 selection:bg-purple-600 selection:text-white relative">
      <ScrollProgress />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Floating Developer CLI Quick Button */}
      <button
        onClick={() => setIsTerminalOpen(true)}
        title="Open Interactive Developer CLI"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gray-900/95 hover:bg-gray-800 text-purple-300 hover:text-white border border-purple-500/50 shadow-[0_0_20px_rgba(130,69,236,0.35)] transition transform hover:scale-105 backdrop-blur-md text-xs font-mono font-bold"
      >
        <FaTerminal size={12} className="text-purple-400" />
        <span className="hidden sm:inline">&gt;_ Dev CLI</span>
      </button>

      <div className="relative pt-20">
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <WhyHireMe />
        <Skills />
        <Experience />
        <Work />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
