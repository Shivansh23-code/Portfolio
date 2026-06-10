import { experience } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Experience</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">Where I've shipped</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub">
              Roles where I built and maintained real production software.
            </p>
          </Reveal>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="card job">
                <div className="job-head">
                  <div>
                    <span className="job-title">{job.title}</span>{" "}
                    <span className="job-company">@ {job.company}</span>
                  </div>
                  <span className="job-status">
                    <span className={`dot${job.status === "running" ? "" : " idle"}`} />
                    {job.status === "running" ? "Running" : "Shipped"}
                  </span>
                </div>
                <div className="job-meta">
                  {job.period} · {job.location}
                </div>

                <ul className="job-points">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="chips">
                  {job.stack.map((s) => (
                    <span key={s} className="chip chip-accent">
                      {s}
                    </span>
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
