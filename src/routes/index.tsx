import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { ParallaxSection } from "@/components/site/Parallax";
import { ServiceDialog } from "@/components/site/ServiceDialog";
import { BookingDialog } from "@/components/site/BookingDialog";
import { TestimonialMarquee } from "@/components/site/TestimonialMarquee";
import { services, testimonials, vortragService, type Service } from "@/components/site/data";

import heroLake from "@/assets/hero-lake.jpg";
import forestLight from "@/assets/forest-light.jpg";
import oceanDawn from "@/assets/ocean-dawn.jpg";
import mountainsMist from "@/assets/mountains-mist.jpg";
import mariaPortrait from "@/assets/maria-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

function Index() {
  const [openService, setOpenService] = useState<Service | null>(null);
  const [booking, setBooking] = useState(false);

  return (
    <div id="top" className="bg-background text-foreground">
      <Nav onBook={() => setBooking(true)} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.95) 100%), url(${heroLake})`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="eyebrow mb-6">Maria Fabijenna · Energetische Heilerin</div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink">
              Wo das Alte gehen darf,<br />
              <span className="italic text-gold">beginnt dein neues Leben.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Energetische Heilarbeit für Menschen, die ganzheitlich heilen möchten —
              körperlich, geistig und seelisch.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setBooking(true)}
                className="btn-gold px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase"
              >
                Termin buchen
              </button>
              <a
                href="#leistungen"
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase inline-flex items-center justify-center"
              >
                Leistungen entdecken
              </a>
            </div>
            <div className="mt-14 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-gold">★★★★★</span>
                <span>5,0 · über 120 Sitzungen</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Persönlich & Online</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL MARQUEE */}
      <TestimonialMarquee />

      {/* ÜBER MICH */}
      <section id="ueber-mich" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/30 rounded-sm -z-10 translate-x-4 translate-y-4" />
            <img
              src={mariaPortrait}
              alt="Maria Fabijenna, Energetische Heilerin"
              width={800}
              height={1024}
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-elegant)]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="eyebrow mb-4">Über mich</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Hallo, ich bin Maria Fabijenna.
            </h2>
            <div className="gold-divider !mx-0 my-6" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Ich begleite Menschen dabei, ihre Themen ganzheitlich zu lösen —
                körperlich, geistig und seelisch-emotional.
              </p>
              <p>
                Ganz gleich, ob du körperliche Beschwerden hast, deren Ursache kein Arzt
                finden kann, ob es in deiner Partnerschaft, Familie oder im Beruf hakt
                oder ob du einfach wieder mehr in deine Mitte und in deine Fülle kommen
                möchtest — ich helfe dir, das Alte loszulassen und dein Leben auf die
                nächste Stufe zu heben.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "8+", v: "Jahre Erfahrung" },
                { k: "120+", v: "Begleitungen" },
                { k: "5,0", v: "Bewertung" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARALLAX QUOTE 1 */}
      <ParallaxSection
        image={mountainsMist}
        overlay="linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.7))"
        minHeight="70vh"
      >
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-center"
          >
            <div className="text-gold text-3xl mb-6">❝</div>
            <blockquote className="font-display italic text-3xl md:text-4xl text-ink leading-snug">
              „{testimonials[0].text}"
            </blockquote>
            <figcaption className="mt-8 text-sm tracking-[0.22em] uppercase text-muted-foreground">
              {testimonials[0].name} · {testimonials[0].location} · {testimonials[0].topic}
            </figcaption>
          </motion.figure>
        </div>
      </ParallaxSection>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="eyebrow mb-4">Leistungen</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Sanfte Arbeit. <span className="italic text-teal">Tiefe Wirkung.</span>
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground">
              Klicke auf eine Leistung, um mehr zu erfahren. Alle Sitzungen sind
              persönlich oder online möglich.
            </p>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border">
            {services.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => setOpenService(s)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group bg-background p-8 text-left hover:bg-accent/40 transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-gold text-2xl">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.short}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-foreground">{s.price}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-teal group-hover:translate-x-1 transition-transform">
                    Mehr →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX – TESTIMONIAL GRID */}
      <ParallaxSection
        image={forestLight}
        overlay="linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.92))"
        minHeight="auto"
        className="py-28"
      >
        <div id="stimmen" className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="eyebrow mb-4">Stimmen meiner Klient*innen</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Vertrauen, das gewachsen ist.
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-muted-foreground">
              Über 120 Menschen haben ihren Weg mit mir begonnen. Hier sind einige ihrer
              Worte.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
                className="bg-background/80 backdrop-blur-sm border border-border/70 p-7 rounded-sm shadow-[var(--shadow-soft)] flex flex-col"
              >
                <div className="text-gold text-sm mb-3">★★★★★</div>
                <blockquote className="font-display italic text-lg text-ink leading-snug flex-1">
                  „{t.text}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border/60">
                  <div className="text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {t.location} · {t.topic}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setBooking(true)}
              className="btn-gold px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase"
            >
              Jetzt Termin buchen
            </button>
          </div>
        </div>
      </ParallaxSection>

      {/* PROCESS */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="eyebrow mb-4">So arbeiten wir</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Dein Weg in <span className="italic text-gold">drei Schritten</span>
            </h2>
            <div className="gold-divider my-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: "01",
                t: "Kennenlernen",
                d: "Ein kurzes, kostenfreies Gespräch — wir prüfen gemeinsam, ob die Arbeit für dich stimmig ist.",
              },
              {
                n: "02",
                t: "Sitzung",
                d: "Persönlich oder online. Du wirst durch den Prozess sanft, klar und respektvoll begleitet.",
              },
              {
                n: "03",
                t: "Integration",
                d: "Du erhältst Impulse für die Zeit danach — damit das, was sich gelöst hat, in dein Leben einfließen kann.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative pl-6 border-l border-gold/40"
              >
                <div className="font-display text-5xl text-gold/70 mb-3">{s.n}</div>
                <h3 className="font-display text-2xl text-ink mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX QUOTE 2 */}
      <ParallaxSection
        image={oceanDawn}
        overlay="linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.65))"
        minHeight="70vh"
      >
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-center"
          >
            <div className="text-gold text-3xl mb-6">❝</div>
            <blockquote className="font-display italic text-3xl md:text-4xl text-ink leading-snug">
              „{testimonials[1].text}"
            </blockquote>
            <figcaption className="mt-8 text-sm tracking-[0.22em] uppercase text-muted-foreground">
              {testimonials[1].name} · {testimonials[1].location} · {testimonials[1].topic}
            </figcaption>
          </motion.figure>
        </div>
      </ParallaxSection>

      {/* KONTAKT / CTA */}
      <section id="kontakt" className="py-28 px-6 bg-accent/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow mb-4">Kontakt</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Bereit für deinen <span className="italic text-teal">nächsten Schritt?</span>
          </h2>
          <div className="gold-divider my-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schreib mir eine Nachricht oder buche direkt deinen Termin. Ich melde mich
            persönlich innerhalb von 24 Stunden bei dir zurück.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBooking(true);
            }}
            className="mt-10 grid sm:grid-cols-2 gap-4 text-left"
          >
            <input
              required
              placeholder="Dein Name"
              className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <input
              required
              type="email"
              placeholder="E-Mail-Adresse"
              className="bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              required
              placeholder="Worum geht es dir?"
              rows={4}
              className="sm:col-span-2 bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
              <button type="submit" className="btn-gold px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase flex-1">
                Nachricht senden
              </button>
              <button
                type="button"
                onClick={() => setBooking(true)}
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase"
              >
                Direkt buchen
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-display text-xl text-ink">Maria Fabijenna</div>
          <div className="flex items-center gap-2">
            <span className="text-gold">★★★★★</span>
            <span>5,0 — vertrauensvoll & sanft begleitet</span>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} · Alle Rechte vorbehalten</div>
        </div>
      </footer>

      <ServiceDialog
        service={openService}
        onClose={() => setOpenService(null)}
        onBook={() => setBooking(true)}
      />
      <BookingDialog open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
