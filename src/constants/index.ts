import type {
  TNavLink,
  TInterest,
  TSkillCategory,
  TExperience,
  TProject,
  TCertification,
  TEducationEntry,
  TAchievement,
  TStat,
} from "../types";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

export const interests: TInterest[] = [
  { title: "Data Science" },
  { title: "Data Analytics" },
  { title: "Web Development" },
  { title: "Core Programming / DSA" },
  { title: "Cloud / DevOps" },
];

export const skillCategories: TSkillCategory[] = [
  {
    category: "Programming",
    items: ["Python", "SQL", "C"],
  },
  {
    category: "Libraries / Frameworks",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Requests",
      "Streamlit",
      "Flask",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Data & Analytics",
    items: ["Data Analytics", "Data Visualization", "Machine Learning"],
  },
  {
    category: "Tools / Software",
    items: ["Excel", "Power BI", "Tableau", "Figma", "GitHub", "VS Code"],
  },
  {
    category: "Other",
    items: ["Git", "UI/UX Design", "Web Development"],
  },
];

export const experiences: TExperience[] = [
  {
    title: "AEH Intern — UI/UX Designer & Web Developer",
    shortLabel: "AEH Intern",
    companyName: "Aravind Eye Hospital, Puducherry",
    project: "QR-Based Smart Navigation & Support",
    duration: "1 month",
    description:
      "Designed and developed a web-based hospital navigation and patient-support application for patients and visitors.",
  },
  {
    title: "IISc Intern — Numerical Analysis",
    shortLabel: "IISc Intern",
    companyName: "Indian Institute of Science (IISc), Bangalore",
    project: "VisualRoot — Interactive Numerical Root Finding Toolkit",
    duration: "1 month",
    description:
      "Worked on Numerical Analysis topics and Python implementations, including an interactive toolkit for visualizing and comparing numerical root-finding algorithms.",
  },
];

export const projects: TProject[] = [
  {
    name: "NeoVision — Smart Neonatal Monitoring Dashboard",
    description:
      "Software dashboard prototype for visualizing simulated neonatal vital data, patient status, alerts, trends, and nurse-view monitoring.",
    role: "Software / Dashboard Developer",
    tags: [
      { name: "react-vite", color: "blue-text-gradient" },
      { name: "recharts", color: "green-text-gradient" },
      { name: "tailwind-css", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/Shahnas-parveen/neovision",
    liveDemoLink: "https://neovisionsih.netlify.app",
    note: "Software dashboard prototype using simulated data — not real patient data.",
  },
  {
    name: "QR-Based Smart Navigation & Support",
    description:
      "Hospital navigation and patient-support web application designed to improve the experience of patients and visitors.",
    role: "UI/UX Designer & Web Developer",
    tags: [
      { name: "html-css-js", color: "blue-text-gradient" },
      { name: "figma", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/Shahnas-parveen/aeh-smart-navigation",
    liveDemoLink: "https://aravind-map-raesha0506.netlify.app",
  },
  {
    name: "Source Code Snippet Finder",
    description:
      "Flask application that retrieves and ranks Python code snippets using TF-IDF and an Inverted Index.",
    role: "Full-Stack Developer",
    tags: [
      { name: "flask", color: "green-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
      { name: "tf-idf", color: "pink-text-gradient" },
    ],
    sourceCodeLink:
      "https://github.com/Shahnas-parveen/source-code-snippet-finder",
    liveDemoLink: "https://source-code-snippet-finder.onrender.com/",
  },
  {
    name: "VisualRoot — Interactive Numerical Root Finding Toolkit",
    description:
      "Interactive Python application for visualizing and comparing numerical root-finding algorithms.",
    role: "Python Developer",
    tags: [
      { name: "streamlit", color: "green-text-gradient" },
      { name: "numpy-sympy", color: "blue-text-gradient" },
      { name: "matplotlib", color: "pink-text-gradient" },
    ],
    sourceCodeLink: "https://github.com/Shahnas-parveen/VisualRoot",
    liveDemoLink: "https://visualroot.streamlit.app/",
  },
  {
    name: "Adaptive Ridge Forecasting Model",
    description:
      "Machine learning forecasting project for detecting changing demand patterns and adapting predictions when sufficient evidence of change is observed.",
    role: "ML / Data Science Developer",
    tags: [
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "pandas-numpy", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    sourceCodeLink:
      "https://github.com/Shahnas-parveen/Adaptive_Ridge_Forecasting_Model",
    liveDemoLink:
      "https://xo54aiml02-nkhgvfkiif5f7vh4cqkuvm.streamlit.app/",
  },
];

export const certifications: TCertification[] = [
  {
    name: "Diploma in Python Programming",
    organization: "Ocean Academy, Puducherry",
    duration: "3 months",
    date: "December 2024",
    certificateLink:
      "https://drive.google.com/file/d/1wmA4-XW8DDzH-mC_BUHUgucXCunwnU2J/view?usp=sharing",
  },
  {
    name: "Human Behavior",
    organization: "NPTEL",
    duration: "8 weeks",
    date: "April 2025",
    certificateLink:
      "https://drive.google.com/file/d/1NooBvXWMTfyTxqyTBqUzmMBImv695N41/view?usp=drive_link",
  },
  {
    name: "Design, Technology and Innovation",
    organization: "NPTEL",
    duration: "8 weeks",
    date: "September 2025",
    certificateLink:
      "https://drive.google.com/file/d/1jdH7vVsaHyg8d18io8srqN8EgQknlS60/view?usp=drive_link",
  },
  {
    name: "AI and ML Applications in Mechanical Engineering",
    organization: "Puducherry Technological University",
    duration: "1 day",
    date: "August 2025",
    certificateLink:
      "https://drive.google.com/file/d/1o3bOMasvmkvxAXhhk31drmObnmYpB429/view?usp=drive_link",
  },
  {
    name: "Rocketry Workshop",
    organization: "Aeroin SpaceTech Pvt. Ltd. / PTU",
    duration: "1 day",
    date: "August 2023",
    certificateLink:
      "https://drive.google.com/file/d/1u-cnowGsozSlgF5OS47EQnj0h1S2Q7Gv/view?usp=drive_link",
  },
  {
    name: "English Foundation & LOB Readiness Training",
    organization: "INSPIRE / Grace Infrastructure Pvt. Ltd.",
    duration: "1 month",
    date: "March 2025",
    certificateLink:
      "https://drive.google.com/file/d/1fT3vKlUa9HQTPQWXmAJ4i4YN34nHIzN9/view?usp=drive_link",
  },
];

export const educationEntries: TEducationEntry[] = [
  {
    degree: "B.Tech — Information Science and Engineering",
    institution: "Women's Engineering College, Puducherry",
    duration: "2023 – 2026",
    score: "Overall CGPA: 9.18",
    semesters: [
      { label: "Semester 1", score: "9.02" },
      { label: "Semester 2", score: "8.11" },
      { label: "Semester 3", score: "9.08" },
      { label: "Semester 4", score: "9.78" },
      { label: "Semester 5", score: "9.73" },
      { label: "Semester 6", score: "9.41" },
    ],
  },
  {
    degree: "12th — CBSE",
    institution: "Aditya Vidyashram",
    duration: "2023",
    score: "80%",
  },
  {
    degree: "10th — CBSE",
    institution: "Aditya Vidyashram",
    duration: "2021",
    score: "87.4%",
  },
];

export const achievements: TAchievement[] = [
  {
    title: "Level 1 Selection — Puduvai Hackathon",
    description: 'Selected for Level 1 with the team project "NeoVision".',
  },
  {
    title: "Academic Performance",
    description: "Overall B.Tech CGPA: 9.18.",
  },
  {
    title: "LUNOVA '26 Technical Symposium",
    description:
      "Compere and Committee Member, contributing to hosting, coordination, and organizational activities.",
  },
];

export const stats: TStat[] = [
  { value: "9.18", label: "CGPA" },
  { value: "5", label: "Projects Built" },
  { value: "6", label: "Certifications" },
  { value: "2", label: "Internships" },
];
