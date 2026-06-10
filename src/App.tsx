import { useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const MAX_TILT = 6; // degrees

/* Cards react to the cursor in two ways, driven by one delegated listener:
   a radial spotlight (--mx / --my) and a subtle 3D tilt (--rx / --ry).
   The previously-hovered card is reset when the pointer moves to another. */
function useCardInteractions() {
  useEffect(() => {
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let current: HTMLElement | null = null;
    const reset = (card: HTMLElement | null) => {
      if (!card) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const card = (target?.closest?.(".card") as HTMLElement | null) ?? null;
      if (card !== current) {
        reset(current);
        current = card;
      }
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height; // 0..1
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
    const reduce =
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

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
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
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
