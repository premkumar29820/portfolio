import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

const socials = [
  { label: "GitHub", href: "https://github.com/premkumar29820", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/prem-kumar-ps0816", icon: LinkedInIcon },
  { label: "Email", href: "mailto:premkumar2982003@gmail.com", icon: MailIcon },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social-row ${className}`}>
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="social-row__link"
          title={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
