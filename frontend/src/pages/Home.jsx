import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks.jsx";
import { ArrowUpRightIcon, CodeIcon, DownloadIcon, PhoneIcon } from "../components/Icons.jsx";
import profile from "../assets/images/profile.jpg"

const skills = ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Firebase"];

export default function Home() {
  return (
    <div className="home-page home-page--classic">
      <section className="hero container">
        <div className="hero__copy">
          <div className="status-pill"><span /> Available for opportunities</div>
          <p className="hero__eyebrow">MERN FULL-STACK DEVELOPER · CHENNAI, INDIA</p>

          <h1 className="hero__name">
            Hello, I'm <span>Premkumar.</span>
          </h1>

          <p className="hero__lede">
            A fresher focused on building responsive web applications, practical products,
            and thoughtful user experiences with modern JavaScript technologies.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="/Premkumar_Resume.pdf"
              download="Premkumar_Resume.pdf"
            >
              <DownloadIcon />
              <span>Download Resume</span>
            </a>

            <Link className="btn btn--ghost" to="/projects">
              <CodeIcon />
              <span>View Projects</span>
              <ArrowUpRightIcon />
            </Link>
          </div>

          <div className="hero__contact-line">
           
            <div className="hero__socials">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <div className="profile-card profile-card--classic">
            <div className="profile-card__top">
              <span>PERSONAL PROFILE</span>
              <span className="profile-card__badge">2026</span>
            </div>

            <div className="profile-card__portrait">
                 <img
                 src={profile}
                 alt="Prem Kumar"
                 />
            </div>

            <div className="profile-card__name">
              <strong>Premkumar</strong>
              <span>MERN Full-Stack Developer</span>
            </div>

            <div className="profile-card__line" />

            <div className="profile-card__skills">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Firebase</span>
            </div>

            <div className="profile-card__footer">
              <small>Clean interfaces · Practical solutions</small>
              <span>Chennai, India</span>
            </div>
          </div>

          <div className="floating-card floating-card--two">
            <span className="pulse-dot" /> Open to work
          </div>
        </div>
      </section>

      <section className="home-facts">
        <div className="container home-facts__grid">
          <div className="home-fact">
           
            <strong>Location</strong>
            <small>Chennai, India</small>
          </div>
          <div className="home-fact">
       
            <strong>Specialization</strong>
            <small>MERN Full-Stack Development</small>
          </div>
          <div className="home-fact">
        
            <strong>Contact</strong>
            <a href="tel:+918248159019"><PhoneIcon /> +91 82481 59019</a>
          </div>
        </div>
      </section>

      <section className="home-intro container">
        <div className="intro-grid">
          <div className="intro-lead">
            <p className="intro-label">MY APPROACH</p>
            <h2>
              Simple ideas,
              <br />
              <em>carefully built.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              I enjoy turning ideas into responsive applications using React, Node.js,
              Express, MongoDB, and related web technologies. I value clear structure,
              useful interfaces, and learning through hands-on projects.
            </p>

            <Link to="/about" className="text-link">
              Read more about me <span>→</span>
            </Link>
          </div>
        </div>

        <div className="skills-ribbon">
          {skills.map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
