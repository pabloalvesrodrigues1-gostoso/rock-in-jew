import { useEffect, useState } from "react";
import { FESTIVAL } from "@/lib/festival";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const target = new Date(FESTIVAL.eventAt).getTime();
  const diff = now === null ? 0 : Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  const cells = [
    { n: days, label: "Dias" },
    { n: hours, label: "Horas" },
    { n: mins, label: "Min" },
    { n: secs, label: "Seg" },
  ];

  return (
    <div className="flex gap-3" aria-label="Contagem para o festival">
      {cells.map((c) => (
        <div key={c.label} className="min-w-14 text-center">
          <p className="font-display text-3xl tabular-nums leading-none tracking-wide sm:text-4xl">
            {now === null ? "—" : pad(c.n)}
          </p>
          <p className="mt-1 font-display text-xs tracking-[0.18em] text-muted uppercase">
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}
