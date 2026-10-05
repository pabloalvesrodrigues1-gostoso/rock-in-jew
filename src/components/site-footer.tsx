import { Link } from "@tanstack/react-router";
import { FESTIVAL, NAV } from "@/lib/festival";
import { ChaiMark, FlagBar, Menorah, StarOfDavid } from "@/components/motifs";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-surface">
      <FlagBar />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl tracking-[0.16em] uppercase">
            <StarOfDavid className="size-6 text-primary" />
            {FESTIVAL.name}
          </p>
          <p className="mt-3 max-w-sm text-muted leading-relaxed">
            {FESTIVAL.tagline} Um domingo de rock, bandeira e chão tremendo no
            Parque Villa-Lobos.
          </p>
          <p className="mt-5 flex items-center gap-3 text-primary">
            <Menorah className="h-8 w-12" />
            <ChaiMark className="text-2xl" />
          </p>
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-muted uppercase">
            Mapa
          </p>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-muted uppercase">
            O domingo
          </p>
          <p className="mt-3 text-fg">{FESTIVAL.dateLabel}</p>
          <p className="text-muted">
            {FESTIVAL.venue}
            <br />
            {FESTIVAL.city}
          </p>
          <p className="mt-4 text-sm text-muted">L'chaim. Am Yisrael Chai.</p>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs tracking-[0.16em] text-muted uppercase">
        Site de demonstração · {FESTIVAL.name} · {FESTIVAL.dateShort}
      </div>
    </footer>
  );
}
