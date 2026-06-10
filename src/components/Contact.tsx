import { Mail, Github, Linkedin, Phone, ArrowRight } from "lucide-react";
import { contact, profile } from "../data/content";
import Reveal from "./Reveal";

const METHODS = [
  { icon: Mail, key: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Github, key: "GitHub", value: contact.githubLabel, href: contact.github },
  { icon: Linkedin, key: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
  { icon: Phone, key: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
];

export default function Contact() {
  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">Let's build something that lasts</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub">
              Open to SDE-1 roles and interesting backend problems. I usually
              reply within a day — based in {profile.location}.
            </p>
          </Reveal>
        </div>

        <div className="contact-methods">
          {METHODS.map((m, i) => (
            <Reveal key={m.key} delay={i * 80}>
              <a
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-method"
              >
                <span className="ci">
                  <m.icon />
                </span>
                <span>
                  <span className="ck">{m.key}</span>
                  <br />
                  <span className="cv">{m.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="contact-cta">
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-primary btn-lg btn-pill"
            >
              Start a conversation <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
