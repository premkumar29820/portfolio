require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");
const projects = [
  { title: "BulkMailer", description: "Built a full-stack bulk-email platform to solve manual, repetitive email outreach for small teams.", tech: ["Node.js", "Express.js", "MongoDB", "Nodemailer"], repoUrl: "https://github.com/premkumar29820/bulkmailer-project", liveUrl: "https://bk-frontend-pi.vercel.app/login", order: 1 },
  { title: "Nostra", description: "Developed a fully responsive e-commerce storefront with dynamic product listings, a shopping cart, and client-side form validation using vanilla JavaScript.", tech: ["HTML5", "CSS3", "JavaScript"], repoUrl: "https://github.com/premkumar29820/-Nostra---E-commerce-Website-", liveUrl: "https://premkumar29820.github.io/-Nostra---E-commerce-Website-/", order: 2 },
  { title: "The Crew", description: "Led a five-member team to plan, build, and ship a multi-page collaborative portfolio site, coordinating contributions with Git/GitHub.", tech: ["HTML5", "CSS3", "JavaScript"], repoUrl: "https://github.com/premkumar29820/The-Crew-group-project", liveUrl: "https://premkumar29820.github.io/The-Crew-group-project/", order: 3 },
  { title: "Weather Application", description: "Built a real-time weather lookup app with a public weather API, Axios, and React Context API for global state management.", tech: ["React.js", "Tailwind CSS", "Axios", "Context API"], repoUrl: "https://github.com/premkumar29820/weather-Report-Application", liveUrl: "https://weather-report-application-seven.vercel.app/", order: 4 },
  { title: "Blog Portfolio", description: "Developed and hosted a personal blog platform with Firebase Authentication and Firestore for secure content publishing.", tech: ["React.js", "Firebase Auth", "Firestore"], repoUrl: "https://github.com/premkumar29820/blog-project", liveUrl: "https://blog-project-orpin-kappa.vercel.app/", order: 5 },
];
async function run() { if (!process.env.MONGO_URI) { console.error("Missing MONGO_URI in .env — see .env.example"); process.exit(1); } await mongoose.connect(process.env.MONGO_URI); await Project.deleteMany({}); await Project.insertMany(projects); console.log(`Seeded ${projects.length} projects.`); await mongoose.disconnect(); }
run().catch((err) => { console.error(err); process.exit(1); });
