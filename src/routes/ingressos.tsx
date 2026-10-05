import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { TICKETS, type Ticket } from "@/lib/festival";
import { cn, formatBRL } from "@/lib/utils";

export const Route = createFileRoute("/ingressos")({ component: TicketsPage });

function TicketsPage() {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <>
      <PageHero kicker="Três portas para o mesmo domingo" title="Ingressos">
        Pista, cadeira ou o lounge da Menorá. Tudo kosher. Isto é um site de
        demonstração — o botão registra o pedido só na tela.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {TICKETS.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              selected={picked === ticket.id}
              onSelect={() => setPicked(ticket.id)}
            />
          ))}
        </div>
        {picked ? (
          <p className="mt-8 rounded-lg bg-surface px-4 py-3 text-sm text-muted shadow-[var(--shadow-border)]">
            Pedido de demonstração:{" "}
            <span className="text-fg">
              {TICKETS.find((t) => t.id === picked)?.name}
            </span>
            . Vendas oficiais em breve — L'chaim.
          </p>
        ) : null}
      </section>
    </>
  );
}

function TicketCard({
  ticket,
  selected,
  onSelect,
}: {
  ticket: Ticket;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={cn(
        "ticket-notch flex flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
        ticket.highlight && "ring-1 ring-primary",
        selected && "ring-1 ring-fg",
      )}
    >
      <p className="font-display text-xs tracking-[0.28em] text-primary uppercase">
        {ticket.hebrew}
      </p>
      <h2 className="mt-2 font-display text-3xl uppercase">{ticket.name}</h2>
      <p className="mt-1 text-sm text-muted">{ticket.blurb}</p>
      <p className="mt-5 font-display text-4xl tracking-wide">{formatBRL(ticket.price)}</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {ticket.includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-fg/90">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
      <Button
        className="mt-8 w-full"
        variant={ticket.highlight ? "default" : "outline"}
        onClick={onSelect}
      >
        {selected ? "Selecionado" : "Quero este"}
      </Button>
    </article>
  );
}
