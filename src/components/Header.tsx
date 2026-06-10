import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "extras", label: "Extras" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstName = profile.name.split(" ")[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <a href="#top" className="logo" aria-label="Home">
          <span className="logo-mark">
            <Code2 />
          </span>
          <span className="logo-name">{firstName}</span>
        </a>

        <nav className="nav">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary magnetic" data-magnetic>
            Get in touch
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary btn-block"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
