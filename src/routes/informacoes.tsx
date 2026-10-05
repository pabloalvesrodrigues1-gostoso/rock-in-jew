import { createFileRoute } from "@tanstack/react-router";
import { Ban, Bus, Car, Check, MapPin, Train } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ALLOWED, FESTIVAL, FORBIDDEN } from "@/lib/festival";
import { FestivalMap } from "@/components/festival-map";

export const Route = createFileRoute("/informacoes")({ component: InfoPage });

function InfoPage() {
  return (
    <>
      <PageHero kicker="Como chegar · o que levar" title="Informações">
        {FESTIVAL.venue}, Alto de Pinheiros. Portões às {FESTIVAL.doors}. A
        estrela está no palco — o endereço é o parque.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-display text-xs tracking-[0.24em] text-primary uppercase">
            Endereço
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase">{FESTIVAL.venue}</h2>
          <p className="mt-3 flex gap-2 text-muted">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {FESTIVAL.address}
            <br />
            {FESTIVAL.city} · {FESTIVAL.cep}
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex gap-3">
              <Train className="mt-0.5 size-5 text-primary" />
              <p>
                <span className="font-medium text-fg">Metrô.</span>{" "}
                <span className="text-muted">
                  Vila Madalena (Linha 2-Verde), depois ônibus ou app até o
                  parque. CPTM Pinheiros também deixa perto.
                </span>
              </p>
            </li>
            <li className="flex gap-3">
              <Bus className="mt-0.5 size-5 text-primary" />
              <p>
                <span className="font-medium text-fg">Ônibus.</span>{" "}
                <span className="text-muted">
                  Linhas pela Av. Prof. Fonseca Rodrigues e pela margem do
                  Pinheiros. Ponto de desembarque sinalizado na entrada norte.
                </span>
              </p>
            </li>
            <li className="flex gap-3">
              <Car className="mt-0.5 size-5 text-primary" />
              <p>
                <span className="font-medium text-fg">Carro e bike.</span>{" "}
                <span className="text-muted">
                  Estacionamento pago no parque. Camarote Menorá tem vaga
                  reservada. Ciclovia do Rio Pinheiros chega na porta.
                </span>
              </p>
            </li>
          </ul>
        </div>

        <figure className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <img
            src="/images/mapa-villa-lobos.jpg"
            alt="Mapa do Parque Villa-Lobos, Alto de Pinheiros, São Paulo, com o Rio Pinheiros ao sul"
            className="h-72 w-full object-cover object-center lg:h-full min-h-72"
          />
          <figcaption className="px-4 py-2 text-xs text-muted">
            Parque Villa-Lobos · Alto de Pinheiros · mapa © OpenStreetMap
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="font-display text-xs tracking-[0.24em] text-primary uppercase">
            Mapa do festival
          </p>
          <h2 className="mt-2 font-display text-display uppercase">Os três palcos</h2>
          <p className="mt-2 max-w-xl text-muted">
            Palco Magen no centro, Sinai à direita, Shalom à esquerda. Pátio
            kosher na Praça Chai, entre a entrada e o Magen.
          </p>
          <div className="mt-8">
            <FestivalMap />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-display uppercase">Regras da casa</h2>
        <p className="mt-2 max-w-xl text-muted">
          Kippah entra. Vidro não. A pista é de rock — e de respeito.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="flex items-center gap-2 font-display tracking-[0.14em] text-primary uppercase">
              <Check className="size-4" />
              Pode levar
            </p>
            <ul className="mt-4 space-y-2.5">
              {ALLOWED.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="flex items-center gap-2 font-display tracking-[0.14em] text-accent uppercase">
              <Ban className="size-4" />
              Não pode levar
            </p>
            <ul className="mt-4 space-y-2.5">
              {FORBIDDEN.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Ban className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
