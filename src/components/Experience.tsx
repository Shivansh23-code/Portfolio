import { experience } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            <span className="verb">GET</span> /experience
          </span>
          <h2 className="section-title">Where I've built things.</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => {
            const current = job.status === "running";
            return (
              <Reveal key={job.company}>
                <div className={`tl-item${current ? " current" : ""}`}>
                  <div className="tl-meta">
                    <span className="tl-role">{job.title}</span>
                    <span className={`tag ${current ? "tag-now" : "tag-intern"}`}>
                      {current ? "CURRENT" : "INTERNSHIP"}
                    </span>
                  </div>
                  <div className="tl-co">
                    {job.company} · {job.location}
                  </div>
                  <div className="tl-date">{job.period}</div>
                  <ul className="tl-points">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="chips tl-stack">
                    {job.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
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
