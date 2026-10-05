import { Clock, MapPin } from "lucide-react";
import type { Artist } from "@/lib/festival";
import { cn } from "@/lib/utils";

export function ArtistCard({
  artist,
  featured = false,
}: {
  artist: Artist;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden bg-surface shadow-[var(--shadow-border)]",
        featured ? "rounded-xl" : "rounded-lg",
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[4/5]" : "aspect-[3/4]")}>
        <img
          src={artist.image}
          alt={artist.name}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent" />
        {artist.houseBand ? (
          <span className="absolute top-3 left-3 rounded-sm bg-accent px-2 py-1 font-display text-xs tracking-[0.16em] text-accent-fg uppercase">
            Banda da casa
          </span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3
            className={cn(
              "font-display tracking-wide uppercase",
              featured ? "text-3xl sm:text-4xl" : "text-2xl",
            )}
          >
            {artist.name}
          </h3>
          {artist.members ? (
            <p className="mt-1 text-sm text-fg/80">{artist.members.join(" · ")}</p>
          ) : null}
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-display text-xs tracking-[0.14em] text-fg/90 uppercase">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" />
              {artist.day} · {artist.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary" />
              {artist.stage}
            </span>
          </p>
        </div>
      </div>
      {featured ? (
        <p className="px-5 py-4 text-sm leading-relaxed text-muted">{artist.bio}</p>
      ) : null}
    </article>
  );
}
