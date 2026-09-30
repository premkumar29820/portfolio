import { NavLink } from "react-router-dom";
import { ArrowUpRightIcon, LogoMark } from "./Icons.jsx";
import SocialLinks from "./SocialLinks.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <NavLink to="/" className="brand" aria-label="Premkumar home">
          <LogoMark />
          <span>Premkumar<span className="brand-accent">.</span></span>
        </NavLink>

        <div className="nav__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav__right">
          <SocialLinks className="nav__socials" />
          <NavLink to="/contact" className="nav-cta">
            <span>Let's talk</span>
            <ArrowUpRightIcon />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
