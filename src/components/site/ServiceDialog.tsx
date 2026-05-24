import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Service } from "./data";

interface Props {
  service: Service | null;
  onClose: () => void;
  onBook: () => void;
}

export function ServiceDialog({ service, onClose, onBook }: Props) {
  return (
    <Dialog open={!!service} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl bg-background border-border">
        {service && (
          <>
            <DialogHeader className="space-y-3 text-left">
              <div className="eyebrow">{service.duration} · {service.price}</div>
              <DialogTitle className="font-display text-3xl text-ink">
                {service.title}
              </DialogTitle>
              <DialogDescription className="sr-only">{service.short}</DialogDescription>
            </DialogHeader>

            <div className="gold-divider !mx-0 my-2" />

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {service.long.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-accent/60 p-5">
              <div className="eyebrow mb-3">Was du gewinnst</div>
              <ul className="space-y-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground">
                    <span className="text-gold mt-0.5">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={() => {
                  onClose();
                  onBook();
                }}
                className="btn-gold px-6 py-3 rounded-full text-sm tracking-wide flex-1"
              >
                {service.title} buchen
              </button>
              <button
                onClick={onClose}
                className="btn-outline-gold px-6 py-3 rounded-full text-sm tracking-wide"
              >
                Schließen
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
