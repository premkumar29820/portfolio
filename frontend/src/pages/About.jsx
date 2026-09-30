const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive UI/UX Design",
  "Node.js", "Express.js", "MongoDB", "Firebase", "RESTful API Design", "CRUD Operations",
  "Authentication & Authorization", "Context API", "Asynchronous JavaScript", "Git", "GitHub", "VS Code", "Vercel", "Render"
];

export default function About() {
  return <section className="page container">
    <div className="page-hero"><div><span className="section-kicker">ABOUT</span><h1 className="page__title">A little <span>about me.</span></h1></div><p>MERN Full-Stack Developer and fresher focused on responsive, user-friendly web applications.</p></div>
    <div className="about-grid">
      <div className="about-bio">
        <div className="glass-card story-card"><span className="card-number"></span><h2>My profile</h2><p>I'm Premkumar, a MERN Full-Stack Developer and fresher based in Chennai, India. I have hands-on experience building responsive web applications with React, Node, Express, and MongoDB.</p><p>I'm comfortable working with REST APIs, authentication, database integration, deployment, and modern frontend tools. I focus on clean, practical, user-friendly solutions.</p></div>
        <div className="experience-block"><span className="section-kicker">CERTIFICATIONS</span><div className="timeline"><div className="timeline-item-new"><div className="timeline-dot" /><div><span className="timeline-date">2026</span><h3>Full Stack Web Developer (MERN) AI Integrator Course</h3><p>Certification</p></div></div><div className="timeline-item-new"><div className="timeline-dot" /><div><span className="timeline-date">2026</span><h3>Prompt Engineering Certification</h3><p>Certification</p></div></div></div></div>
      </div>
      <aside className="about-side">
        <div className="glass-card education-card"><span className="card-number"></span><h2>Education</h2><div className="edu-year">2021 — 2026</div><h3>B.E. Biotechnology</h3><p>SRM Institute of Science & Technology · Kattankulathur</p><span className="location-tag">CGPA 7.9 / 10</span></div>
        <div className="glass-card skills-card"><span className="card-number"></span><h2>Skills & tools</h2><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        <div className="glass-card education-card"><span className="card-number"></span><h2>Languages</h2><p>Kannada · Tamil · English</p></div>
      </aside>
    </div>
  </section>;
}
