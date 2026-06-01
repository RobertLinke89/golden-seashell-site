import { testimonials } from "./data";

export function TestimonialMarquee() {
  const loop = [...testimonials, ...testimonials];
  return (
    <div className="relative py-10 overflow-hidden border-y border-border/60 bg-accent/30">
      <div className="flex gap-6 animate-[scroll_45s_linear_infinite] whitespace-nowrap">
        {loop.map((t, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-background border border-border/70 shadow-sm"
          >
            <span className="text-gold text-lg">★★★★★</span>
            <span className="text-sm text-foreground italic max-w-[420px] truncate">
              „{t.text.slice(0, 80)}…"
            </span>
            <span className="text-xs text-muted-foreground">— {t.topic}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
