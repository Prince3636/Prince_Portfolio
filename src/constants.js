// Skills Section Logo's
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
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";

// Education Section Logo's
import pietLogo from "./assets/education_logo/pietLogo.png";
import vpsLogo from "./assets/education_logo/vpsLogo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React", logo: reactjsLogo },
      { name: "Next Js", logo: nextjsLogo },
      { name: "Tailwind", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C#", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Web Development Intern",
    company: "CodSoft",
    date: "August 2024",
    desc: "Successfully completed a 4-week virtual internship in Web Development at CodSoft. Worked on real-world projects, applying frontend and backend development concepts. Demonstrated strong problem-solving skills, built responsive web applications, and gained hands-on experience in modern web technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "MongoDB",
      "Responsive Design",
      "REST APIs",
    ],
  },
  {
    id: 1,
    img: agcLogo, // replace with SkillifyMe logo
    role: "AI & Machine Learning Intern",
    company: "SkillifyMe",
    date: "July 2025 - August 2025",
    desc: "Successfully completed a summer training and internship program in Artificial Intelligence and Machine Learning at SkillifyMe. Gained hands-on experience in core ML concepts, data analysis, and model building. Worked on practical tasks to understand real-world AI applications and improved problem-solving and analytical skills.",
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
    school: "P.I.E.T",
    date: "Sept 2022 - July 2026",
    grade: "7.81 CGPA",
    desc: "I am pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Panipat Institute of Engineering and Technology (P.I.E.T). During my academic journey, I have developed a strong foundation in core computer science subjects including Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Development. I have actively participated in technical workshops and hands-on projects, which have strengthened my problem-solving skills and practical understanding of software development. My experience at P.I.E.T has played a significant role in shaping my technical expertise and professional growth.",
    degree: "B.Tech in Computer Science and Engineering (CSE)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "GOVT SR SEC SCHOOL, Thesil Camp, Panipat",
    date: "June 2019 - july 2021",
    grade: "91%",
    desc: "I completed my class 12 education from GOVT SR SEC SCHOOL, Thesil Camp, under the HBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) ",
    degree: "HBSE(XII) - PCM ",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "GIANDEEP PUBLIC SR SEC SCHOOL ,PANIPAT",
    date: "Apr 2017 - MAY 2019",
    grade: "76.5%",
    desc: "I completed my class 10 education from GIANDEEP PUBLIC SR SEC SCHOOL ,PANIPAT, under the HBSE board, where I studied Science with Computer.",
    degree: "HBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
];
