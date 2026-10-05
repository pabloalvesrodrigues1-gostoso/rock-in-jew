import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { ArtistCard } from "@/components/artist-card";
import { Countdown } from "@/components/countdown";
import { StarOfDavid } from "@/components/motifs";
import { Button } from "@/components/ui/button";
import { FESTIVAL, FEATURED } from "@/lib/festival";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const ordered = [
    FEATURED.find((a) => a.id === "iron-maiden"),
    FEATURED.find((a) => a.id === "the-crown"),
    FEATURED.find((a) => a.id === "linkin-park"),
  ].filter(Boolean);

  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Palco do Rock in Jew com a Estrela de Davi em luzes azuis sobre a plateia"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/70 to-bg/25" />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-bg/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="stagger-in max-w-3xl">
            <p className="flex items-center gap-2 font-display text-xs tracking-[0.32em] text-primary uppercase">
              <StarOfDavid className="size-4" />
              São Paulo · {FESTIVAL.dateShort}
            </p>
            <h1 className="mt-3 font-display text-hero leading-[0.82] uppercase">
              Rock
              <span className="block text-primary">in Jew</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-fg/90 sm:text-xl">
              {FESTIVAL.tagline} Domingo de metal, rap gótico e a bandeira no vento.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg/80">
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                {FESTIVAL.weekday}, {FESTIVAL.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {FESTIVAL.venue}, {FESTIVAL.city}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="invert">
                <Link to="/ingressos">Garantir ingresso</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/lineup">Ver line-up</Link>
              </Button>
            </div>
            <div className="mt-10">
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-xs tracking-[0.28em] text-primary uppercase">
          Os três do cartaz
        </p>
        <h2 className="mt-2 font-display text-display uppercase">Headliners</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Iron Maiden e Linkin Park fecham a noite. No meio deles, a banda da casa:
          The Crown — Kai, MC PR e MC Jão do Pão.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ordered.map((artist) =>
            artist ? (
              <ArtistCard key={artist.id} artist={artist} featured />
            ) : null,
          )}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/lineup">Line-up completo</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          {[
            { k: FESTIVAL.dateShort, v: "Um domingo. Três palcos. Dois hinos e uma estrela." },
            { k: "חי", v: "Kosher no pátio, kippah na pista, bandeira no mosh." },
            { k: "00h30", v: "O Palco Magen apaga por último. L'chaim." },
          ].map((item) => (
            <div key={item.k}>
              <p className="font-display text-4xl tracking-wide text-primary">{item.k}</p>
              <p className="mt-2 text-muted">{item.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
