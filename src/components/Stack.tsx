import { Code2, LayoutGrid, Database, Wrench, Boxes } from "lucide-react";
import { stack } from "../data/content";
import Reveal from "./Reveal";

const ICONS = [Code2, LayoutGrid, Database, Wrench, Boxes];

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <Reveal>
          <span className="eyebrow">
            <span className="verb">GET</span> /skills
          </span>
          <h2 className="section-title">The toolkit.</h2>
          <p className="section-sub">
            A backend-leaning stack built around Spring Boot, with the
            event-driven and real-time pieces I reach for in production.
          </p>
        </Reveal>

        <div className="skills-grid">
          {stack.map((layer, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={layer.layer} delay={(i % 2) * 80}>
                <div className="fx-card skill-cat">
                  <div className="skill-cat-head">
                    <span className={`skill-ico ico-${i % 5}`}>
                      <Icon />
                    </span>
                    <h3>{layer.layer}</h3>
                  </div>
                  <div className="chips">
                    {layer.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
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
