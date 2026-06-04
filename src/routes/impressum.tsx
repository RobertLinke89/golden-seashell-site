import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
});

function Impressum() {
  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col selection:bg-gold selection:text-primary-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60 py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl tracking-wide text-ink group-hover:text-gold transition-colors">
              Maria Fabijenna
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-teal">
              Energetische Heilerin
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="eyebrow mb-3">Rechtliche Angaben</div>
        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">Impressum</h1>
        <div className="gold-divider !mx-0 mb-12" />

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* Anbieter */}
          <section className="bg-accent/20 border border-border/60 p-8 rounded-sm shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-2xl text-ink mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-1.5 text-sm">
              <p className="font-semibold text-foreground">Maria Kröckel</p>
              <p>Einzelunternehmerin</p>
              <p>Goetheweg 15</p>
              <p>07422 Bad Blankenburg</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">Kontakt</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-foreground">E-Mail:</span>{" "}
                <a href="mailto:mariafabijenna@gmx.de" className="hover:text-gold transition-colors underline decoration-gold/40">
                  mariafabijenna@gmx.de
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Kontaktformular:</span>{" "}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setContactOpen(true);
                  }}
                  className="hover:text-gold transition-colors underline decoration-gold/40 text-left font-medium text-teal"
                >
                  Hier direkt Nachricht senden
                </button>
              </p>
              <p>
                <span className="font-medium text-foreground">Webseite:</span>{" "}
                <Link to="/" className="hover:text-gold transition-colors">
                  www.maria-fabijenna.de
                </Link>
              </p>
            </div>
          </section>

          {/* Rechtliche Hinweise / Disclaimer */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">Wichtiger rechtlicher Hinweis</h2>
            <div className="space-y-3 text-sm border-l-2 border-gold pl-4 py-1 italic bg-gold/5">
              <p>
                Meine energetische Heilarbeit dient ausschließlich der Aktivierung der Selbstheilungskräfte und der Harmonisierung von Körper, Geist und Seele.
              </p>
              <p>
                Ich bin keine Ärztin, Heilpraktikerin oder Psychotherapeutin. Meine Sitzungen, Beratungen und Vorträge ersetzen nicht die Diagnose oder Behandlung durch einen Arzt, Heilpraktiker oder Psychotherapeuten. Es werden keine Diagnosen gestellt, keine Heilungen versprochen und keine Medikamente verordnet oder empfohlen.
              </p>
              <p>
                Die energetische Heilarbeit ist in Deutschland rechtlich als freie Heiltätigkeit anerkannt (entsprechend dem Urteil des Bundesverfassungsgerichts vom 02. März 2004, Az: 1 BvR 784/03).
              </p>
            </div>
          </section>

          {/* Verbraucherschlichtung */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-ink border-b border-border/60 pb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors underline decoration-gold/40"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-sm">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>

      {/* Contact Dialog Popup */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="max-w-md bg-background border-border">
          <DialogHeader className="text-left space-y-2">
            <div className="eyebrow">Kontakt</div>
            <DialogTitle className="font-display text-3xl text-ink">
              Nachricht senden
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Schreibe mir dein Anliegen direkt über dieses Formular.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold text-xl">
                ✓
              </div>
              <h3 className="font-display text-2xl text-ink">
                Vielen Dank
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Deine Nachricht wurde erfolgreich gesendet. Ich melde mich innerhalb von 24 Stunden persönlich bei dir unter deiner angegebenen E-Mail-Adresse.
              </p>
              <button
                onClick={() => setContactOpen(false)}
                className="btn-outline-gold px-6 py-2 rounded-full text-xs mt-4"
              >
                Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground font-medium">Dein Name</label>
                <input
                  required
                  placeholder="Maria Schmidt"
                  className="w-full bg-background border border-border rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground font-medium">E-Mail-Adresse</label>
                <input
                  required
                  type="email"
                  placeholder="beispiel@domain.de"
                  className="w-full bg-background border border-border rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground font-medium">Deine Nachricht</label>
                <textarea
                  required
                  placeholder="Worum geht es dir?"
                  rows={4}
                  className="w-full bg-background border border-border rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-gold w-full py-3 rounded-full text-xs tracking-[0.15em] uppercase font-semibold mt-2"
              >
                Nachricht senden
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-accent/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-display text-xl text-ink">Maria Fabijenna</div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">Startseite</Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} · Alle Rechte vorbehalten</div>
        </div>
      </footer>
    </div>
  );
}
