import {
  Package,
  Bot,
  Briefcase,
  FileText,
  ShoppingCart,
  Network,
  Github,
  ExternalLink,
} from "lucide-react";
import type { ComponentType } from "react";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const PROJECT_ICONS: Record<string, ComponentType> = {
  "SIA — Smart Inventory": Package,
  Privoraa: Bot,
  "Job Portal": Briefcase,
  "Resume System": FileText,
  RightAway: ShoppingCart,
  "System Configurator": Network,
};

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            <span className="verb">GET</span> /projects
          </span>
          <h2 className="section-title">Things I've shipped.</h2>
          <p className="section-sub">
            Projects where I owned the architecture end to end — from secured
            REST services to polished frontends.
          </p>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => {
            const Icon = PROJECT_ICONS[p.name] ?? Package;
            return (
              <Reveal key={p.name} delay={(i % 2) * 80}>
                <div className="fx-card proj-card">
                  <div className="proj-top">
                    <span className="proj-badge">
                      <Icon />
                    </span>
                    <div className="proj-links">
                      {p.links.map((link) => {
                        const isDemo = /demo|live/i.test(link.label);
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.label}
                            title={link.label}
                          >
                            {isDemo ? <ExternalLink /> : <Github />}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <div className="proj-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
