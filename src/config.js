// ============================================================
//  🌌 GRAVITY DEFIED — PORTFOLIO CONFIG
//  Edit anything below to update your portfolio instantly!
// ============================================================

export const PORTFOLIO = {

  // ── THEME ────────────────────────────────────────────────
  theme: {
    primary:   "#00d4ff",   // Electric blue
    secondary: "#ffd700",   // Gold
    accent:    "#39ff14",   // Neon green
    bg:        "#020818",   // Deep space
    glow:      "rgba(0, 212, 255, 0.4)",
  },

  // ── PERSONAL INFO ────────────────────────────────────────
  name:  "Karuvesh Chaurasiya",
  title: "AI & Machine Learning Engineer",
  bio:   "Passionate AI/ML developer with hands-on experience in NLP, deep learning, and intelligent systems. I build real-world solutions — from sentiment analyzers and stock traders to game AI — driven by a love for turning data into impact.",

  // Photo: place your image at /public/avatar.jpg
  avatarImage: "",

  // ── SKILLS (Solar System) ────────────────────────────────
  // level: 1–10 controls planet SIZE
  skills: [
    { name: "Python",          level: 10, color: "#3776ab" },
    { name: "NLP",             level: 9,  color: "#ff6b9d" },
    { name: "React.js",        level: 8,  color: "#61dafb" },
    { name: "scikit-learn",    level: 7,  color: "#f89939" },
    { name: "TensorFlow",      level: 7,  color: "#ff6f00" },
    { name: "Pandas",          level: 8,  color: "#5b4fcf" },
    { name: "TypeScript",      level: 8,  color: "#3178c6" },
    { name: "JavaScript",      level: 8,  color: "#f7df1e" },
    { name: "Node.js",         level: 7,  color: "#68a063" },
    { name: "C / C++",         level: 6,  color: "#00599c" },
    { name: "Git / GitHub",    level: 9,  color: "#f34f29" },
    { name: "Unreal Engine 5", level: 6,  color: "#0d96f2" },
  ],

  // ── PROJECTS ─────────────────────────────────────────────
  projects: [
    {
      title: "Sentiment Analysis — Student Online Learning",
      description:
        "NLP pipeline to classify student sentiment from online learning experiences. Uses text preprocessing, vectorization, and ML classifiers to surface actionable insights for educators.",
      tech: ["Python", "NLP", "scikit-learn", "Pandas", "NLTK"],
      icon: "🧠",
      color: "#3776ab",
    },
    {
      title: "NLP Document Translator",
      description:
        "Full-stack document translation tool leveraging transformer-based NLP models. Supports multi-language conversion with a clean React frontend and Python backend.",
      tech: ["Python", "Transformers", "React.js", "Node.js", "REST API"],
      icon: "🌐",
      color: "#61dafb",
    },
    {
      title: "Chart Pattern Analysis & Intraday Stock Trader",
      description:
        "Algorithmic trading app that detects candlestick patterns using computer vision and ML, executing simulated intraday trades with real-time chart rendering and performance metrics.",
      tech: ["Python", "OpenCV", "scikit-learn", "Pandas", "Matplotlib"],
      icon: "📈",
      color: "#ffd700",
    },
    {
      title: "Omnilearn — AI-Powered Learning Explainer",
      description:
        "Intelligent study assistant that takes any topic or document and generates structured explanations, summaries, and quiz questions using LLM-driven pipelines.",
      tech: ["Python", "LLMs", "React.js", "TypeScript", "FastAPI"],
      icon: "🎓",
      color: "#39ff14",
    },
    {
      title: "MST Algorithm Visualizer",
      description:
        "Interactive visual tool for step-by-step animation of Minimum Spanning Tree algorithms (Prim's & Kruskal's), making graph theory intuitive for learners.",
      tech: ["JavaScript", "React.js", "D3.js", "CSS Animations"],
      icon: "🕸️",
      color: "#ff6b9d",
    },
    {
      title: "Fracture Fate — Zombie Survival Game",
      description:
        "Semi-open world zombie survival game in Unreal Engine 5 with custom AI behavior trees for enemies, dynamic environments, and immersive gameplay mechanics.",
      tech: ["Unreal Engine 5", "C++", "Blueprint", "Game AI", "3D Design"],
      icon: "🎮",
      color: "#e53935",
    },
  ],

  // ── PRIZES & AWARDS ──────────────────────────────────────
  prizes: [
    {
      title: "1st Place — State Hackathon",
      event: "Techcoronation, Goa",
      year: "2024",
      description:
        "Won 1st place at a state-level hackathon organized by Techcoronation, competing against top engineering teams across Goa.",
      icon: "🏆",
    },
    {
      title: "11+ GitHub Repositories",
      event: "Open Source Contributions",
      year: "2024",
      description:
        "Published 11+ open-source projects on GitHub spanning AI/ML, full-stack web apps, algorithms, and game development.",
      icon: "⭐",
    },
    {
      title: "M.Sc AI Admission",
      event: "Goa University",
      year: "2025",
      description:
        "Admitted to the M.Sc Computer Science (AI) program at Goa University — selected among a competitive cohort.",
      icon: "🎖️",
    },
  ],

  // ── CERTIFICATES ─────────────────────────────────────────
  certificates: [
    {
      title: "Python for Data Science",
      issuer: "IIT / NPTEL",
      date: "2023",
      credentialId: "NPTEL-PDS-2023",
      skills: "Python, Pandas, NumPy, Matplotlib, Data Analysis",
      frontColor: "#1a237e",
      backColor:  "#283593",
    },
    {
      title: "Problem Solving through Programming in C",
      issuer: "IIT / NPTEL",
      date: "2022",
      credentialId: "NPTEL-PSPC-2022",
      skills: "C Programming, Algorithms, Problem Solving",
      frontColor: "#004d40",
      backColor:  "#00695c",
    },
    {
      title: "The Joy of Computing using Python",
      issuer: "IIT Madras / NPTEL",
      date: "2022",
      credentialId: "NPTEL-JCP-2022",
      skills: "Python, Computational Thinking, Automation",
      frontColor: "#4a148c",
      backColor:  "#6a1b9a",
    },
    {
      title: "Cloud Computing",
      issuer: "IIT Kharagpur / NPTEL",
      date: "2023",
      credentialId: "NPTEL-CC-2023",
      skills: "Cloud Architecture, AWS, Virtualization, SaaS/PaaS/IaaS",
      frontColor: "#0d47a1",
      backColor:  "#1565c0",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      credentialId: "UDM-WEB-2023",
      skills: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
      frontColor: "#b71c1c",
      backColor:  "#c62828",
    },
    {
      title: "100 Days of Python",
      issuer: "Udemy (Angela Yu)",
      date: "2023",
      credentialId: "UDM-100PY-2023",
      skills: "Python, OOP, APIs, Web Scraping, GUI, Automation",
      frontColor: "#1b5e20",
      backColor:  "#2e7d32",
    },
  ],

  // ── HOBBIES ──────────────────────────────────────────────
  hobbies: [
    { name: "AI Research",  icon: "🤖" },
    { name: "Generative AI",icon: "✨" },
    { name: "Game AI",      icon: "🎮" },
    { name: "Painting",     icon: "🎨" },
    { name: "Sketching",    icon: "✏️" },
    { name: "Music",        icon: "🎵" },
    { name: "Astronomy",    icon: "🔭" },
    { name: "Open Source",  icon: "💻" },
  ],

  // ── EDUCATION ────────────────────────────────────────────
  education: [
    {
      degree: "M.Sc Computer Science (Artificial Intelligence)",
      institution: "Goa University",
      year: "2025 – Ongoing",
      detail: "Specializing in AI & Machine Learning. Pursuing advanced research in NLP, deep learning, and intelligent systems.",
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Govt. College of Arts, Science & Commerce, Quepem, Goa",
      year: "2021 – 2025",
      detail: "CGPA: 7.0 · Final Year AI/ML Project · Active in hackathons, coding competitions, and tech events.",
    },
    {
      degree: "Higher Secondary (HSC) — Science",
      institution: "Jawahar Navodaya Vidyalaya, Canacona, Goa",
      year: "2019 – 2021",
      detail: "Score: 81% · Science & Mathematics stream · CBSE Board.",
    },
    {
      degree: "High School (SSC)",
      institution: "Jawahar Navodaya Vidyalaya, Canacona, Goa",
      year: "Graduated 2019",
      detail: "Score: 80% · CBSE Board · Strong foundation in Science and Mathematics.",
    },
  ],

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    email:    "krchaurasiya2003@gmail.com",
    github:   "https://github.com/krchaurasiya",
    linkedin: "https://linkedin.com/in/karuvesh-chaurasiya-461374374",
    twitter:  "",
  },
};
