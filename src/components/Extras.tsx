import { Trophy, Medal, Award, GraduationCap } from "lucide-react";
import type { ComponentType } from "react";
import { achievements, education } from "../data/content";
import Reveal from "./Reveal";

const ICON_BY_TAG: Record<string, ComponentType> = {
  "GATE 2026": Award,
  Hackathon: Trophy,
  Athletics: Medal,
};

export default function Extras() {
  return (
    <section id="extras">
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            <span className="verb">GET</span> /highlights
          </span>
          <h2 className="section-title">Beyond the code.</h2>
        </Reveal>

        <div className="ach-grid">
          {achievements.map((a, i) => {
            const Icon = ICON_BY_TAG[a.tag] ?? Trophy;
            return (
              <Reveal key={a.title} delay={(i % 2) * 80}>
                <div className="fx-card ach-card">
                  <span className="ach-ico">
                    <Icon />
                  </span>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="edu-strip">
            <div className="eL">
              <span className="ecap">
                <GraduationCap />
              </span>
              <div>
                <h3>{education.degree}</h3>
                <p>
                  {education.school} · {education.university} · Class of{" "}
                  {education.year}
                </p>
              </div>
            </div>
            <div className="edu-gpa">
              <div className="g">
                {education.gpa.split("/")[0].trim()}
                <span style={{ fontSize: "1rem", color: "var(--color-faint)" }}>
                  /10
                </span>
              </div>
              <div className="gl">GPA</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
