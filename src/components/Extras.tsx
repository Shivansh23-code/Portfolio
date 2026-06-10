import { GraduationCap, Trophy, Award } from "lucide-react";
import { education, achievements } from "../data/content";
import Reveal from "./Reveal";

const ACH_ICONS = [Trophy, Award];

export default function Extras() {
  return (
    <section id="extras">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">More</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">Education &amp; beyond</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub">
              Where I studied, and a few things I'm proud of outside the editor.
            </p>
          </Reveal>
        </div>

        <div className="cards-grid">
          <Reveal>
            <article className="card">
              <span className="card-icon">
                <GraduationCap />
              </span>
              <h3 className="card-title">{education.degree}</h3>
              <p className="card-text">
                {education.school}
                <br />
                {education.university} · Graduated {education.year}
              </p>
              <div className="chips" style={{ marginTop: "1rem" }}>
                <span className="chip chip-accent">GPA {education.gpa}</span>
              </div>
            </article>
          </Reveal>

          {achievements.map((a, i) => {
            const Icon = ACH_ICONS[i % ACH_ICONS.length];
            return (
              <Reveal key={a.title} delay={(i + 1) * 100}>
                <article className="card">
                  <span className="card-icon">
                    <Icon />
                  </span>
                  <div className="chips" style={{ marginBottom: "0.75rem" }}>
                    <span className="chip chip-accent">{a.tag}</span>
                  </div>
                  <h3 className="card-title">{a.title}</h3>
                  <p className="card-text">{a.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
