import { stack } from "../data/content";

/* Infinite horizontal scroll of the whole tech stack. The item list is
   duplicated so the -50% keyframe loops seamlessly; hover pauses it. */
export default function Marquee() {
  const items = stack.flatMap((layer) => layer.items);
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
