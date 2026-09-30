import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Premkumar</span>
        <span>MERN Full-Stack Developer</span>
        <SocialLinks className="footer-socials" />
      </div>
    </footer>
  );
}
