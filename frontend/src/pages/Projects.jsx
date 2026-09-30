import { useEffect, useState } from "react";
import { getProjects } from "../api.js";
import { ArrowUpRightIcon, GitHubIcon } from "../components/Icons.jsx";

const fallbackProjects = [
  { title: "BulkMailer", description: "Built a full-stack bulk-email platform for repetitive email outreach, with a Node.js/Express backend, MongoDB contact storage, and Nodemailer/SMTP mailing workflow.", tech: ["Node.js", "Express.js", "MongoDB", "Nodemailer"], repoUrl: "https://github.com/premkumar29820/bulkmailer-project", liveUrl: "https://bk-frontend-pi.vercel.app/login" },
  { title: "Nostra", description: "Developed a responsive e-commerce storefront with dynamic product listings, shopping cart interactions, and client-side form validation.", tech: ["HTML5", "CSS3", "JavaScript"], repoUrl: "https://github.com/premkumar29820/-Nostra---E-commerce-Website-" },
  { title: "The Crew", description: "Led a five-member team to plan, build, and ship a multi-page collaborative portfolio site using Git and GitHub for coordination.", tech: ["HTML5", "CSS3", "JavaScript"], repoUrl: "https://github.com/premkumar29820/The-Crew-group-project" },
  { title: "Weather Application", description: "Built a real-time weather lookup app using a public weather API, Axios, and React Context API for global state management.", tech: ["React.js", "Tailwind CSS", "Axios", "Context API"], repoUrl: "https://github.com/premkumar29820/weather-Report-Application", liveUrl: "https://weather-report-application-seven.vercel.app/" },
  { title: "Blog Portfolio", description: "Developed and hosted a personal blog platform with Firebase Authentication for login and registration and Firestore for posts.", tech: ["React.js", "Firebase Auth", "Firestore"], repoUrl: "https://github.com/premkumar29820/blog-project", liveUrl: "https://blog-project-orpin-kappa.vercel.app/" },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setStatus("ready");
      })
      .catch(() => {
        setProjects(fallbackProjects);
        setStatus("fallback");
      });
  }, []);

  return (
    <section className="page container">
      <div className="page-hero projects-heading">
        <div>
          <span className="section-kicker">SELECTED WORK</span>
          <h1 className="page__title">
            Things I've <span>built.</span>
          </h1>
        </div>
        <p>Real projects built across frontend, full-stack, API, database, and Firebase workflows.</p>
      </div>

      {status === "loading" ? (
        <div className="loading-card">
          Loading projects<span>...</span>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project._id || project.title}>
              <div className={`project-art project-art--${index % 3}`}>
                <div className="art-lines" />
                <strong>{project.title?.slice(0, 2).toUpperCase()}</strong>
              </div>

              <div className="project-card__body">
                <div className="project-card__top">
                  <span>PROJECT </span>
                  <div className="project-links">
                    {project.repoUrl && project.repoUrl !== "#" && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                        <GitHubIcon /> <span className="project-link-text">GitHub</span> <ArrowUpRightIcon />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live project`}>
                        Live <ArrowUpRightIcon />
                      </a>
                    )}
                  </div>
                </div>

                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech?.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
