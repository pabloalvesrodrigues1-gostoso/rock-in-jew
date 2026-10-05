import { useState, type ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grain flex min-h-svh flex-col bg-bg text-fg">
      <SiteHeader menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      <main
        className={cn("flex-1", menuOpen && "hidden")}
        aria-hidden={menuOpen}
        inert={menuOpen ? true : undefined}
      >
        {children}
      </main>
      {menuOpen ? null : <SiteFooter />}
    </div>
  );
}
