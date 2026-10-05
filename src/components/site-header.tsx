import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { NAV } from "@/lib/festival";
import { cn } from "@/lib/utils";
import { FlagBar } from "@/components/motifs";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  menuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
};

export function SiteHeader({ menuOpen, onMenuOpenChange }: SiteHeaderProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    onMenuOpenChange(false);
  }, [pathname, onMenuOpenChange]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (mq.matches) onMenuOpenChange(false);
    };
    closeOnDesktop();
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, [onMenuOpenChange]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "z-50 bg-bg",
        menuOpen
          ? "fixed inset-0 flex flex-col"
          : "sticky top-0 bg-bg/92 backdrop-blur-md",
      )}
    >
      <FlagBar />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-fg"
          aria-label="Rock in Jew — início"
        >
          <img
            src="/images/logo-judaica.png"
            alt=""
            className="size-10 rounded-full object-cover outline-none sm:size-12"
          />
          <span className="font-display text-xl tracking-[0.18em] uppercase sm:text-2xl">
            Rock in Jew
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 font-display text-sm tracking-[0.16em] uppercase transition-colors duration-150",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "mt-1 block h-0.5 origin-left bg-primary transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {menuOpen ? null : (
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/ingressos">Ingressos</Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => onMenuOpenChange(!menuOpen)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6 pb-10 pt-4 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-14 items-center border-b border-border font-display text-4xl tracking-[0.12em] uppercase",
                    active ? "text-primary" : "text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <p className="font-display text-sm tracking-[0.2em] text-primary uppercase">
            22.11.26 · São Paulo · חי
          </p>
        </div>
      ) : null}
    </header>
  );
}
