import { ArrowRight, Terminal } from "lucide-react";
import { profile, metrics } from "../data/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <Reveal>
          <span className="hero-badge">
            <span className="dot" />
            {profile.available
              ? "Available for SDE-1 roles"
              : "Building in production"}
          </span>
        </Reveal>

        <Reveal delay={60}>
          <span className="hero-icon">
            <Terminal />
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1>
            {profile.name}
            <br />
            <span className="grad">{profile.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="hero-sub">
            Backend-focused developer building production systems with Spring
            Boot, REST APIs, Redis &amp; React — with a bias toward clean
            architecture, debugging, and API performance.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg btn-pill">
              Start a conversation <ArrowRight />
            </a>
            <a href="#work" className="btn btn-ghost btn-lg btn-pill">
              View work
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="hero-stats">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="hero-stat-value">
                  {m.value}
                  {m.suffix}
                </div>
                <div className="hero-stat-label">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
