import { ArrowRight, Mail } from "lucide-react";
import { profile, metrics } from "../data/content";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* left */}
          <div>
            <span className="status-pill">
              <span className="dot live" />
              {profile.available
                ? "Available for SDE-1 roles"
                : "Building in production"}
            </span>

            <h1>
              Backend engineer who ships
              <br />
              <span className="grad">production Spring Boot systems.</span>
            </h1>

            <p className="hero-lead">
              I'm <strong>{profile.name}</strong> — a Java developer building
              real-time CRM platforms with{" "}
              <strong>REST APIs, Kafka-driven events, WebSockets, and Redis
              caching</strong>. I care about clean architecture, defensive code,
              and APIs that hold up under load.
            </p>

            <div className="hero-cta">
              <a
                href="#work"
                className="btn btn-primary magnetic"
                data-magnetic
              >
                View my work <ArrowRight />
              </a>
              <a
                href="#contact"
                className="btn btn-ghost magnetic"
                data-magnetic
              >
                <Mail /> Contact me
              </a>
            </div>

            <div className="hero-stats">
              {metrics.map((m) => (
                <div className="stat" key={m.label}>
                  <div className="num">
                    <CountUp to={m.value} suffix={m.suffix} />
                  </div>
                  <div className="lbl">{m.label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right — terminal */}
          <div>
            <div className="terminal" aria-label="Developer profile API response">
              <div className="term-bar">
                <span className="tdot td-r" />
                <span className="tdot td-y" />
                <span className="tdot td-g" />
                <span className="term-file">~ developer.json</span>
              </div>
              <div className="term-body">
                <div className="term-line">
                  <span className="t-prompt">$</span>{" "}
                  <span className="t-cmd">curl -s https://api.shivansh.dev/v1/me</span>
                </div>
                <div className="term-line">
                  <span className="t-punc">{"{"}</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"name"</span>
                  <span className="t-punc">:</span>{" "}
                  <span className="t-str">"{profile.name}"</span>
                  <span className="t-punc">,</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"role"</span>
                  <span className="t-punc">:</span>{" "}
                  <span className="t-str">"Backend-focused Java Developer"</span>
                  <span className="t-punc">,</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"company"</span>
                  <span className="t-punc">:</span>{" "}
                  <span className="t-str">"MBG Card India Pvt Ltd"</span>
                  <span className="t-punc">,</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"stack"</span>
                  <span className="t-punc">:</span> <span className="t-punc">[</span>
                  <span className="t-str">"Spring Boot"</span>
                  <span className="t-punc">,</span>{" "}
                  <span className="t-str">"Kafka"</span>
                  <span className="t-punc">,</span>{" "}
                  <span className="t-str">"Redis"</span>
                  <span className="t-punc">,</span>{" "}
                  <span className="t-str">"STOMP"</span>
                  <span className="t-punc">],</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"location"</span>
                  <span className="t-punc">:</span>{" "}
                  <span className="t-str">"Jabalpur, IN"</span>
                  <span className="t-punc">,</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"experience_yrs"</span>
                  <span className="t-punc">:</span> <span className="t-num">1</span>
                  <span className="t-punc">,</span>
                </div>
                <div className="term-line">
                  &nbsp;&nbsp;<span className="t-key">"open_to_work"</span>
                  <span className="t-punc">:</span>{" "}
                  <span className="t-num">{String(profile.available)}</span>
                </div>
                <div className="term-line">
                  <span className="t-punc">{"}"}</span>
                </div>
                <div className="term-line">
                  <span className="t-comment"># 200 OK · 41ms</span>
                  <span className="cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
