import { useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const MAX_TILT = 6; // degrees

/* Cards react to the cursor: a radial spotlight (--mx / --my) and a subtle
   3D tilt (--rx / --ry), driven by one delegated listener over .fx-card. */
function useCardInteractions() {
  useEffect(() => {
    const disabled =
      typeof matchMedia !== "undefined" &&
      (matchMedia("(prefers-reduced-motion: reduce)").matches ||
        matchMedia("(hover: none)").matches);
    if (disabled) return;

    let current: HTMLElement | null = null;
    const reset = (card: HTMLElement | null) => {
      if (!card) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const card = (target?.closest?.(".fx-card") as HTMLElement | null) ?? null;
      if (card !== current) {
        reset(current);
        current = card;
      }
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
      card.style.setProperty("--ry", `${(px - 0.5) * 2 * MAX_TILT}deg`);
      card.style.setProperty("--rx", `${(0.5 - py) * 2 * MAX_TILT}deg`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

/* Magnetic pull — elements with [data-magnetic] drift toward the cursor. */
function useMagnetic() {
  useEffect(() => {
    const disabled =
      typeof matchMedia !== "undefined" &&
      (matchMedia("(prefers-reduced-motion: reduce)").matches ||
        matchMedia("(hover: none)").matches);
    if (disabled) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    );
    const cleanups = els.map((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
}

export default function App() {
  useCardInteractions();
  useMagnetic();

  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
