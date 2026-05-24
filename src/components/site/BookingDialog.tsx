import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { services } from "./data";

interface Props {
  open: boolean;
  onClose: () => void;
}

const days = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return d;
});

const times = ["09:00", "11:00", "14:00", "16:30", "18:00"];

export function BookingDialog({ open, onClose }: Props) {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [day, setDay] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selected = services.find((s) => s.id === serviceId)!;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) {
          onClose();
          setTimeout(() => {
            setSubmitted(false);
            setDay(null);
            setTime(null);
          }, 200);
        }
      }}
    >
      <DialogContent className="max-w-3xl bg-background border-border">
        <DialogHeader className="text-left space-y-2">
          <div className="eyebrow">Terminbuchung</div>
          <DialogTitle className="font-display text-3xl text-ink">
            Deinen Termin wählen
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Eine sanfte Vorschau — die finale Buchung wird über cal.com abgewickelt.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="mx-auto w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold text-2xl">
              ✓
            </div>
            <h3 className="font-display text-2xl text-ink">
              Vielen Dank für dein Vertrauen
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Deine Anfrage für <span className="text-foreground">{selected.title}</span>
              {day && time && (
                <>
                  {" "}am{" "}
                  <span className="text-foreground">
                    {day.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" })}{" "}
                    um {time}
                  </span>
                </>
              )}{" "}
              wurde notiert. Sobald cal.com angebunden ist, erhältst du deine Bestätigung
              automatisch per E-Mail.
            </p>
            <button onClick={onClose} className="btn-outline-gold px-6 py-2.5 rounded-full text-sm mt-4">
              Schließen
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 pt-2">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Leistung
              </div>
              <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={`w-full text-left p-3 rounded-md border transition-all ${
                      serviceId === s.id
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/40"
                    }`}
                  >
                    <div className="text-sm text-foreground">{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {s.duration} · {s.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Datum
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {days.map((d) => {
                    const sel = day && d.toDateString() === day.toDateString();
                    return (
                      <button
                        key={d.toISOString()}
                        onClick={() => setDay(d)}
                        className={`p-2 rounded-md text-center text-xs border transition-all ${
                          sel
                            ? "border-gold bg-gold/10 text-foreground"
                            : "border-border hover:border-gold/40 text-muted-foreground"
                        }`}
                      >
                        <div className="uppercase">
                          {d.toLocaleDateString("de-DE", { weekday: "short" })}
                        </div>
                        <div className="text-base text-foreground font-display">
                          {d.getDate()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Uhrzeit
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      disabled={!day}
                      className={`py-2 rounded-md text-sm border transition-all disabled:opacity-40 ${
                        time === t
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border hover:border-gold/40 text-muted-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                disabled={!day || !time}
                className="btn-gold w-full py-3 rounded-full text-sm tracking-wide disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Termin anfragen
              </button>
              <p className="text-[11px] text-muted-foreground text-center">
                Mockup-Vorschau · Die finale Buchung erfolgt über cal.com
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
