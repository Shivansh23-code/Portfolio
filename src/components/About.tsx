import { contact } from "../data/content";
import Reveal from "./Reveal";

const FACTS: { k: string; v: string; href?: string }[] = [
  { k: "role", v: "Java Developer @ MBG Card" },
  { k: "focus", v: "Spring Boot · Microservices" },
  { k: "based_in", v: "Jabalpur, MP · India" },
  { k: "degree", v: "B.Tech CSE · 8.3 GPA" },
  { k: "email", v: contact.email, href: `mailto:${contact.email}` },
  { k: "github", v: "Shivansh23-code", href: contact.github },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            <span className="verb">GET</span> /about
          </span>
          <h2 className="section-title">Backend depth, full-stack range.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div>
              <p>
                I build the parts of an application most people never see but
                always rely on. At <strong>MBG Card India</strong>, I work inside
                a production CRM that spans{" "}
                <strong>44 controllers and ~297 endpoints</strong> — designing
                REST APIs, hardening service-layer logic, and triaging defects
                across a live system.
              </p>
              <p>
                My favourite work this year was shipping an end-to-end{" "}
                <strong>call-queue and escalation module</strong>:
                Flyway-versioned migrations, a scheduled engine that
                auto-escalates overdue calls every 10 seconds, and real-time{" "}
                <strong>WebSocket (STOMP)</strong> notifications pushed to
                department heads — all decoupled with <strong>Kafka</strong> and
                guarded by ShedLock.
              </p>
              <p>
                I'm comfortable on the frontend too — React dashboards,
                RBAC-protected views, JWT auth — but the backend is where I do my
                best thinking. I treat null-guards and transaction boundaries as
                first-class concerns.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="about-card">
              <h3>// quick facts</h3>
              {FACTS.map((f) => (
                <div className="fact" key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v">
                    {f.href ? (
                      <a
                        href={f.href}
                        target={f.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
