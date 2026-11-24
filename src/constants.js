// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// Company Logos
import commonnextLogo from "./assets/company_logo/commonnext_logo.svg";
import codsoftLogo from "./assets/company_logo/codsoft_logo.svg";
import skillifymeLogo from "./assets/company_logo/skillifyme_logo.svg";

// Education Section Logos
import pietLogo from "./assets/education_logo/pietLogo.png";
import vpsLogo from "./assets/education_logo/vpsLogo.png";

// Real Project SVG Banners
import splitshareBanner from "./assets/work_logo/splitshare.svg";
import cutpulseBanner from "./assets/work_logo/cutpulse.svg";
import storypulseBanner from "./assets/work_logo/storypulse.svg";
import keyscoutBanner from "./assets/work_logo/keyscout.svg";
import vartalapBanner from "./assets/work_logo/vartalap.svg";
import bingoroyaleBanner from "./assets/work_logo/bingoroyale.svg";
import movierecBanner from "./assets/work_logo/movierec.svg";
import ganitgharBanner from "./assets/work_logo/ganitghar.svg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", logo: reactjsLogo },
      { name: "Vite", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "REST APIs", logo: postmanLogo },
      { name: "Socket.io", logo: nodejsLogo },
      { name: "Razorpay", logo: expressjsLogo },
    ],
  },
  {
    title: "Mobile & DevOps",
    skills: [
      { name: "Capacitor", logo: reactjsLogo },
      { name: "Android APK", logo: reactjsLogo },
      { name: "GitHub Actions", logo: githubLogo },
      { name: "Play Console", logo: gitLogo },
      { name: "FCM Push", logo: firebaseLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: netlifyLogo },
      { name: "Backblaze B2", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "JavaScript (ES6+)", logo: javascriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "SQL", logo: mysqlLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Technical SEO", logo: githubLogo },
      { name: "GA4 Analytics", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: commonnextLogo,
    role: "Full Stack Developer (Promoted from Intern)",
    company: "CommonNext LLP (Remote)",
    date: "Jun 2026 onwards",
    desc: "Developed and shipped 247Shop and Asili247, hyperlocal production marketplaces connecting neighborhood shops with nearby buyers across React.js and Node.js/Express. Built production REST APIs for auth, order processing, and seller dashboards with Firebase Cloud Messaging (FCM). Integrated Razorpay payment gateway (transitioning test keys to production live keys). Converted web app into an Android app using Capacitor, automated APK builds with GitHub Actions CI/CD, and published it on Google Play Store. Handled technical SEO (Google Search Console, GA4, sitemaps, meta tags) and live product catalog sync with Google Shopping.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firebase",
      "Razorpay",
      "Capacitor (Android)",
      "Google Play Console",
      "GitHub Actions",
      "FCM",
      "Technical SEO",
      "Google Analytics 4",
    ],
  },
  {
    id: 1,
    img: codsoftLogo,
    role: "Software Intern, Web Development",
    company: "CodSoft",
    date: "Jul 2024 - Aug 2024",
    desc: "Successfully completed a 4-week internship in Web Development at CodSoft. Built responsive UI components, contributed to frontend and backend application tasks, and implemented clean, responsive design practices across modern web platforms.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Responsive Design",
      "REST APIs",
    ],
  },
  {
    id: 2,
    img: skillifymeLogo,
    role: "AI and Machine Learning Intern",
    company: "SkillifyMe",
    date: "Jul 2025 - Aug 2025",
    desc: "Completed hands-on training and applied projects in Python and Machine Learning fundamentals. Gained practical experience in data analysis, model building with Scikit-learn, NumPy, and Pandas to analyze real-world datasets.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "AI Fundamentals",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: pietLogo,
    school: "Panipat Institute of Engineering and Technology (PIET), Haryana",
    date: "Sept 2022 - July 2026",
    grade: "7.5 CGPA",
    desc: "Pursuing Bachelor of Technology (B.Tech) in Computer Science and Engineering. Built a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Full Stack Web & Mobile Development.",
    degree: "B.Tech in Computer Science and Engineering (CSE)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "GOVT SR SEC SCHOOL, Thesil Camp, Panipat",
    date: "June 2019 - July 2021",
    grade: "91.8%",
    desc: "Completed Senior Secondary (12th) education under the HBSE board with Physics, Chemistry, and Mathematics (Non-Medical).",
    degree: "Senior Secondary (12th), Non-Medical | HBSE Board",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "GIANDEEP PUBLIC SR SEC SCHOOL, Panipat",
    date: "Apr 2017 - May 2019",
    grade: "76.5%",
    desc: "Completed Secondary School (10th) education under the HBSE board with Science and Computer Application.",
    degree: "Secondary School (10th) | HBSE Board",
  },
];

export const achievements = [
  {
    id: 0,
    title: "Team Leader — Smart India Hackathon 2024",
    subtitle: "Ministry of Education & AICTE",
    desc: "Led a team in designing and building a medicine monitoring web application (HTML, CSS, PHP, MySQL) addressing timely pharmaceutical tracking.",
    badge: "National Hackathon",
  },
  {
    id: 1,
    title: "Presented 'Nyay Room' Project",
    subtitle: "Code Crafter Competition",
    desc: "Presented an innovative legal-aid and dispute management platform at the Code Crafter Competition with interactive dispute resolution workflows.",
    badge: "Competition Finalist",
  },
  {
    id: 2,
    title: "100+ DSA Problems Solved",
    subtitle: "LeetCode & GeeksforGeeks",
    desc: "Solved over 100+ algorithmic problems across arrays, trees, dynamic programming, and graphs on LeetCode and GeeksforGeeks.",
    badge: "Problem Solving",
  },
];

export const projects = [
  {
    id: 0,
    title: "Splitshare-Pro",
    category: "Full Stack",
    statusBadge: "🟢 Live Demo",
    description:
      "A modern, mobile-first bill splitting application featuring real-time group approvals, multi-UPI QR barcodes, trip kitty pool & 1-click WhatsApp settlements. Packaged for Android with Capacitor and synced in real-time with WebSockets.",
    highlights: [
      "Real-time expense sync with WebSockets across multiple users",
      "Dynamic multi-UPI QR code generation for instant bank payments",
      "Trip kitty pool management with 1-click WhatsApp balance settlements",
      "Mobile-optimized progressive design packaged for Android via Capacitor",
    ],
    architecture: ["React Mobile UI", "Capacitor Native Bridge", "WebSocket Broadcast", "UPI Barcode Engine", "WhatsApp Webhook"],
    image: splitshareBanner,
    tags: ["React", "Vite", "Capacitor", "WebSockets", "Tailwind CSS", "UPI Integration"],
    github: "https://github.com/Prince3636/Splitshare-Pro",
    webapp: "https://split-share-puce.vercel.app",
  },
  {
    id: 1,
    title: "CutPulse (WASM Video Splitter)",
    category: "Mobile & WASM",
    statusBadge: "🚀 WebAssembly",
    description:
      "High-performance, privacy-first, client-side video splitter powered by WebAssembly (FFmpeg WASM). Enables splitting long videos into WhatsApp Status, Instagram Reels, YouTube Shorts, or custom chapters directly in browser with zero server uploads, original stream quality (no re-encoding), and zero watermarks.",
    highlights: [
      "100% Client-side video processing powered by WebAssembly (FFmpeg WASM)",
      "Zero server uploads guaranteeing absolute user video privacy",
      "Lossless stream copy splitting (no re-encoding, ultra-fast exports)",
      "Auto-segmentation for WhatsApp Status (30s) and Instagram Reels",
    ],
    architecture: ["Browser Video Drop", "WebAssembly Worker", "FFmpeg Core Stream", "Lossless Slice Engine", "Local Blob Export"],
    image: cutpulseBanner,
    tags: ["TypeScript", "FFmpeg WASM", "WebAssembly", "React", "Video Processing", "Privacy-First"],
    github: "https://github.com/Prince3636/CutPulse",
    webapp: "https://cutpulse-eight.vercel.app",
  },
  {
    id: 2,
    title: "StoryPulse (Social Publishing App)",
    category: "Full Stack",
    statusBadge: "⚡ Production",
    description:
      "A social publishing platform for web and Android where writers publish stories, articles, and readers engage with them. Built with React and Vite, authentication & database via Firebase, media storage on Backblaze B2, and mobile build using Capacitor. Deployed live on Vercel and Render.",
    highlights: [
      "Rich article publishing editor with live preview and markdown support",
      "Cloud media pipeline powered by Backblaze B2 object storage",
      "Multi-role user authentication and interactive social engagement feeds",
      "Cross-platform deployment across Web (Vercel) and Android (Capacitor)",
    ],
    architecture: ["React Client App", "Firebase Auth / DB", "Backblaze B2 Storage", "Capacitor Android Build", "Vercel / Render CDN"],
    image: storypulseBanner,
    tags: ["React", "Vite", "Firebase", "Backblaze B2", "Capacitor", "Android", "Render"],
    github: "https://github.com/Prince3636",
    webapp: "https://cutpulse-eight.vercel.app",
  },
  {
    id: 3,
    title: "KeyScout (SEO Discovery Suite)",
    category: "AI & Analytics",
    statusBadge: "🧭 Production Suite",
    description:
      "Fast, production-grade SEO Keyword Discovery & Explorer Suite featuring Google Live Autocomplete, SERP analysis, Hinglish intent clustering, Schema generator, and saved keyword management. Designed for deep search marketing analytics.",
    highlights: [
      "Google Live Search suggestions scraper and real-time query expander",
      "Hinglish intent clustering algorithm classifying search intent automatically",
      "Interactive SERP difficulty score calculator and competitor insights",
      "JSON-LD Schema generator and keyword collection export to CSV/JSON",
    ],
    architecture: ["Search Analytics UI", "Node/Express Proxy", "Google Suggest Engine", "NLP Intent Classifier", "Schema JSON-LD Gen"],
    image: keyscoutBanner,
    tags: ["React", "Node.js", "Express", "SEO Analytics", "Google API", "Tailwind CSS"],
    github: "https://github.com/Prince3636/KeyScout",
    webapp: "https://github.com/Prince3636/KeyScout",
  },
  {
    id: 4,
    title: "Vartalap (Real-Time Messaging)",
    category: "Full Stack",
    statusBadge: "🟢 Live Demo",
    description:
      "A real-time messaging application enabling users to connect instantly with live chat, online user tracking, and secure authentication. Features a React frontend, Express.js backend with Socket.io, and Android build through Capacitor. Deployed on Vercel and Render.",
    highlights: [
      "Bidirectional instant messaging with sub-100ms latency via Socket.io",
      "Live user presence status (online/offline indicators) and typing signals",
      "Protected REST API routes with JWT and HTTP-only cookie security",
      "Mobile APK packaging powered by Capacitor for native Android deployment",
    ],
    architecture: ["React Frontend", "Socket.io Transport", "Express REST Gateway", "MongoDB Cluster", "Capacitor APK Wrapper"],
    image: vartalapBanner,
    tags: ["React", "Node.js", "Express", "Socket.io", "Capacitor", "Render", "MERN"],
    github: "https://github.com/Prince3636/Full-Stack-Chat-App",
    webapp: "https://full-stack-chat-app-z6xg.onrender.com",
  },
  {
    id: 5,
    title: "Bingo Royale (Multiplayer Game)",
    category: "Full Stack",
    statusBadge: "🎮 Live Game",
    description:
      "A real-time multiplayer bingo game built with Vite, TypeScript, and Node.js. Features room-based gameplay, live state synchronization, interactive number tracking, and modern responsive UI with instant multiplayer actions.",
    highlights: [
      "Dynamic multiplayer game rooms with custom shareable room codes",
      "Real-time synchronized game board state and automated win verification",
      "Written in strictly-typed TypeScript for robust client/server contracts",
      "Fluid celebratory UI animations, sound effects, and dark mode themes",
    ],
    architecture: ["TypeScript Client", "WebSocket Room Server", "In-Memory Board State", "Sync Validation Loop", "Celebration Audio/FX"],
    image: bingoroyaleBanner,
    tags: ["TypeScript", "Vite", "Node.js", "WebSockets", "Multiplayer", "Tailwind CSS"],
    github: "https://github.com/Prince3636/Bingo-Royale",
    webapp: "https://bingo-royale-bay.vercel.app",
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    category: "AI & Analytics",
    statusBadge: "🤖 Machine Learning",
    description:
      "A machine learning-based movie recommendation system built with Python and Streamlit. Suggests relevant movies using content-based filtering techniques, similarity scoring, and NLP on comprehensive movie metadata.",
    highlights: [
      "Content-based filtering using Cosine Similarity on TF-IDF word vectors",
      "Trained on 5,000+ movie titles with cast, crew, and genre tags",
      "Interactive Streamlit web interface with instant poster fetching",
      "Optimized model serialized with Pickle for low-latency web inference",
    ],
    architecture: ["Streamlit Web Interface", "Python Inference Core", "Cosine Similarity Engine", "Pickle Serializer", "Poster API Gateway"],
    image: movierecBanner,
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn", "NLP", "Pandas"],
    github: "https://github.com/Prince3636/Movie-Recommendation-System",
    webapp: "https://movie-recommendation-system-7bxmfshrdba4uqj5rfwk2u.streamlit.app/",
  },
  {
    id: 7,
    title: "Ganit-Ghar (Gamified EdTech)",
    category: "Full Stack",
    statusBadge: "🟢 Live Demo",
    description:
      "Interactive math learning web platform featuring 15 comprehensive topics with 10 progressive difficulty levels each (from basic to advanced), helping students learn and master mathematics step-by-step.",
    highlights: [
      "Curriculum of 15 structured math subjects across arithmetic and algebra",
      "10 progressive difficulty levels per topic with unlocking mechanics",
      "Real-time score calculation, streak tracking, and interactive feedback",
      "Lightweight, ultra-responsive UI with zero lag on mobile devices",
    ],
    architecture: ["React Interactive UI", "Topic Curriculum Engine", "Level Progression State", "XP & Streak Manager", "Local Storage Cache"],
    image: ganitgharBanner,
    tags: ["React", "Vite", "Tailwind CSS", "EdTech", "Gamified Learning"],
    github: "https://github.com/Prince3636/Ganit-Ghar",
    webapp: "https://ganit-ghar.vercel.app",
  },
];
