import { stack } from "../data/content";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Toolbox</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">My stack</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section-sub">
              The languages, frameworks and infrastructure I reach for, grouped
              by layer.
            </p>
          </Reveal>
        </div>

        <div className="stack-grid">
          {stack.map((layer, i) => (
            <Reveal key={layer.layer} delay={i * 80}>
              <article className="card stack-card">
                <div className="stack-head">
                  <span className="stack-layer">{layer.layer}</span>
                  <span className="stack-code">{layer.code}</span>
                </div>
                <div className="chips">
                  {layer.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
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
