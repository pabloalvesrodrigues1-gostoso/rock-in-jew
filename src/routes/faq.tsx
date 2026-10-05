import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ, FESTIVAL } from "@/lib/festival";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero kicker="Perguntas · contato" title="Dúvidas">
        Seis respostas prontas e um formulário que não envia nada — este é um
        site de teste. Para o domingo, o e-mail da casa é {FESTIVAL.email}.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <aside className="h-fit rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
          <h2 className="font-display text-2xl uppercase">Fale com a casa</h2>
          <p className="mt-2 text-sm text-muted">
            {FESTIVAL.phone}
            <br />
            {FESTIVAL.email}
          </p>

          {sent ? (
            <p className="mt-6 text-sm leading-relaxed text-fg">
              Mensagem de demonstração registrada na tela. Ninguém recebeu este
              formulário — e está tudo bem. Shalom.
            </p>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div className="space-y-1.5">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" required autoComplete="name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="assunto">Assunto</Label>
                <Input id="assunto" name="assunto" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea id="mensagem" name="mensagem" required />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          )}
        </aside>
      </section>
    </>
  );
}
