import { createFileRoute } from "@tanstack/react-router";
import { ArtistCard } from "@/components/artist-card";
import { PageHero } from "@/components/page-hero";
import { ARTISTS, STAGES } from "@/lib/festival";

export const Route = createFileRoute("/lineup")({ component: LineupPage });

function LineupPage() {
  const byTime = [...ARTISTS].sort((a, b) => a.time.localeCompare(b.time));

  return (
    <>
      <PageHero kicker="22.11.26 · Parque Villa-Lobos" title="Line-up">
        Nove atos, três palcos, um domingo. The Crown sobe no Magen às 18h40 — a
        banda da casa entre o ferro e o nu-metal.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {STAGES.map((stage) => (
            <div
              key={stage.name}
              className="rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)]"
            >
              <p className="font-display tracking-[0.12em] uppercase">{stage.name}</p>
              <p className="text-sm text-muted">{stage.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {byTime.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </>
  );
}
