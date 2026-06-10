import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Work</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">Things I've shipped</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub">
              A backend platform and a frontend build — more on the way.
            </p>
          </Reveal>
        </div>

        <div className="cards-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="card project-card">
                <div className="project-top">
                  <span className="project-index">
                    0{i + 1} / project
                  </span>
                  <span className="job-status">
                    <span className={`dot${p.status === "live" ? " live" : ""}`} />
                    {p.status}
                  </span>
                </div>

                <h3 className="project-name">{p.name}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-blurb">{p.blurb}</p>

                <div className="chips">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {p.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      {link.label} <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
