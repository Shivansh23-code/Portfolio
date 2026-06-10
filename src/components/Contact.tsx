import { Mail, Linkedin, Github } from "lucide-react";
import { contact } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <span className="eyebrow">
              <span className="verb">POST</span> /contact
            </span>
            <h2>Let's build something solid.</h2>
            <p>
              I'm open to backend and Java developer roles. If you need someone
              who ships dependable APIs and sweats the architecture, let's talk.
            </p>
            <div className="contact-actions">
              <a
                href={`mailto:${contact.email}`}
                className="btn btn-primary magnetic"
                data-magnetic
              >
                <Mail /> Email me
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <Linkedin /> LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <Github /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
