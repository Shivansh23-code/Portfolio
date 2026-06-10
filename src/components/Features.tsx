import { Server, Zap, LayoutDashboard } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Server,
    title: "Backend & APIs",
    text: "10+ Spring Boot REST APIs across a 44-controller, ~297-endpoint production system. JWT, Spring Security and role-based access throughout.",
  },
  {
    icon: Zap,
    title: "Event-driven systems",
    text: "Kafka-decoupled notifications, Redis caching, ShedLock-guarded jobs, WebSocket (STOMP) push and Flyway-versioned schema migrations.",
  },
  {
    icon: LayoutDashboard,
    title: "Full-stack delivery",
    text: "React dashboards wired to clean backend services, Dockerized blue-green deploys, and endpoints tested with Postman & documented in Swagger.",
  },
];

export default function Features() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">What I do</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">Backend engineering, end to end</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub">
              I build and ship production backend systems — from API design and
              data modelling to event-driven workflows and the dashboards on top.
            </p>
          </Reveal>
        </div>

        <div className="cards-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <article className="card">
                <span className="card-icon">
                  <f.icon />
                </span>
                <h3 className="card-title">{f.title}</h3>
                <p className="card-text">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
