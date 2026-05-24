import { useEffect, useState } from "react";

interface NavProps {
  onBook: () => void;
}

const links = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav({ onBook }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-ink">
            Maria Fabijenna
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-teal">
            Energetische Heilerin
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onBook}
            className="btn-gold px-6 py-2.5 rounded-full text-sm tracking-wide"
          >
            Termin buchen
          </button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border mt-3">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="btn-gold px-6 py-3 rounded-full text-sm self-start"
            >
              Termin buchen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
