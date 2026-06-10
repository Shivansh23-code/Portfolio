import { Mail, Github, Linkedin } from "lucide-react";
import { contact, profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container foot-inner">
        <span className="fl">
          © {year} {profile.name} — Portfolio · Built with Spring Boot energy ⚡
        </span>
        <div className="foot-soc">
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <Mail />
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
