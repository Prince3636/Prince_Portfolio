import React, { useState, useRef, useEffect } from "react";
import { FaTerminal, FaTimes, FaCircle } from "react-icons/fa";

const Terminal = ({ isOpen, onClose, onOpenResume }) => {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Welcome to Prince's Developer CLI v2.0 (x86_64-pc-none). Type 'help' to view available commands.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmed = inputVal.trim();
      const lower = trimmed.toLowerCase();

      const newHistory = [...history, { type: "user", text: trimmed }];

      switch (lower) {
        case "help":
          newHistory.push({
            type: "system",
            text: `Available commands:
  about      - Display overview and summary
  skills     - List primary technical skills & tools
  projects   - Show top featured production projects
  exp        - View professional experience history
  resume     - Open official interactive resume preview
  contact    - Print direct contact methods
  github     - Visit GitHub profile (github.com/Prince3636)
  clear      - Clear terminal window
  exit       - Close developer terminal session`,
          });
          break;

        case "about":
          newHistory.push({
            type: "system",
            text: `PRINCE KUMAR - Full Stack Developer
Shipped production hyperlocal marketplace systems on web & Android (Capacitor).
Experienced with React, Node.js, Express, Firebase, Razorpay, WebSockets & WASM.`,
          });
          break;

        case "skills":
          newHistory.push({
            type: "system",
            text: `Frontend:   React.js, Vite, Tailwind CSS, Next.js, HTML5, CSS3
Backend:    Node.js, Express.js, MongoDB, Firebase, MySQL, REST APIs, Socket.io
Mobile:     Capacitor (Android APKs, Google Play Store Publishing)
DevOps:     GitHub Actions (CI/CD), Vercel, Render, Backblaze B2, FCM
SEO & Data: Technical SEO, GA4 Analytics, Google Shopping Catalog Sync`,
          });
          break;

        case "projects":
          newHistory.push({
            type: "system",
            text: `[1] Splitshare-Pro: Mobile bill splitting app with real-time UPI QR settlements
[2] CutPulse:       Privacy-first video splitter powered by WebAssembly (FFmpeg WASM)
[3] StoryPulse:     Social publishing platform with Firebase & Backblaze B2
[4] KeyScout:       SEO Keyword Discovery & Google Live Autocomplete suite
[5] Vartalap:       Real-time MERN chat app with Socket.io & Capacitor Android build
[6] Bingo Royale:   Multiplayer room-based game with WebSocket state sync`,
          });
          break;

        case "exp":
          newHistory.push({
            type: "system",
            text: `• CommonNext LLP (Remote) | Full Stack Developer
  Shipped 247Shop & Asili247, integrated live Razorpay & published Android app on Google Play.
• CodSoft | Software Intern, Web Development (Jul 2024 - Aug 2024)
• SkillifyMe | AI & Machine Learning Intern (Jul 2025 - Aug 2025)`,
          });
          break;

        case "resume":
          newHistory.push({
            type: "system",
            text: "Opening interactive in-page resume preview modal...",
          });
          if (onOpenResume) onOpenResume();
          break;

        case "contact":
          newHistory.push({
            type: "system",
            text: `Email:    Prince722663@gmail.com
Phone:    +91 7015708661
LinkedIn: https://www.linkedin.com/in/prince3636/
GitHub:   https://github.com/Prince3636`,
          });
          break;

        case "github":
          window.open("https://github.com/Prince3636", "_blank");
          newHistory.push({
            type: "system",
            text: "Opening https://github.com/Prince3636 in new browser tab...",
          });
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        case "exit":
          onClose();
          return;

        case "sudo":
          newHistory.push({
            type: "system",
            text: "Permission granted: You are already a superuser on this portfolio!",
          });
          break;

        case "":
          break;

        default:
          newHistory.push({
            type: "error",
            text: `command not found: ${trimmed}. Type 'help' to see valid commands.`,
          });
      }

      setHistory(newHistory);
      setInputVal("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl h-[65vh] sm:h-[70vh] bg-[#0c091f]/95 border border-purple-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs sm:text-sm relative shadow-[0_0_35px_rgba(130,69,236,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#130e2e] border-b border-gray-800 select-none">
          <div className="flex items-center space-x-2">
            <FaCircle className="text-red-500 cursor-pointer" size={11} onClick={onClose} />
            <FaCircle className="text-yellow-500 cursor-pointer" size={11} />
            <FaCircle className="text-emerald-500 cursor-pointer" size={11} />
            <span className="text-gray-400 text-xs font-semibold ml-2">prince@portfolio: ~ (bash)</span>
          </div>

          <div className="flex items-center space-x-3 text-gray-400">
            <span className="hidden sm:inline text-[11px] text-purple-400 font-sans">Type 'help' for commands</span>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition"
            >
              <FaTimes size={13} />
            </button>
          </div>
        </div>

        {/* Terminal Log Output */}
        <div
          className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2 bg-[#080517]"
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line.type === "user" ? (
                <div className="flex items-center space-x-2 text-white">
                  <span className="text-purple-400 font-bold">prince@portfolio:~$</span>
                  <span>{line.text}</span>
                </div>
              ) : line.type === "error" ? (
                <div className="text-red-400 whitespace-pre-wrap">{line.text}</div>
              ) : (
                <div className="text-emerald-300 whitespace-pre-wrap">{line.text}</div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center space-x-2 text-white pt-1">
            <span className="text-purple-400 font-bold">prince@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-purple-400 text-xs sm:text-sm"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
