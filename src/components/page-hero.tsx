import type { ReactNode } from "react";
import { ChaiMark, StarOfDavid } from "@/components/motifs";

export function PageHero({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -right-8 top-6 text-primary/20">
        <StarOfDavid className="size-40 sm:size-56" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="flex items-center gap-3 font-display text-xs tracking-[0.28em] text-primary uppercase">
          <ChaiMark className="text-base" />
          {kicker}
        </p>
        <h1 className="mt-3 font-display text-poster uppercase leading-[0.9]">{title}</h1>
        {children ? <div className="mt-4 max-w-2xl text-muted leading-relaxed">{children}</div> : null}
      </div>
    </section>
  );
}
