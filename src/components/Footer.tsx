import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { contact, profile } from "../data/content";

export default function Footer() {
  const firstName = profile.name.split(" ")[0];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#top" className="logo" aria-label="Home">
            <span className="logo-mark">
              <Code2 />
            </span>
            <span className="logo-name">{firstName}</span>
          </a>
          <p className="footer-slogan">
            {profile.role} — backend-focused, building production systems that
            last.
          </p>
          <div className="footer-socials">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#stack">Stack</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#extras">Extras</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={`mailto:${contact.email}`}>Email</a></li>
              <li><a href={`tel:${contact.phone}`}>Phone</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} {profile.name} · {profile.location}
      </div>
    </footer>
  );
}
