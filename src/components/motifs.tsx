import { cn } from "@/lib/utils";

export function StarOfDavid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      fill="none"
      aria-hidden
    >
      <polygon
        points="12,1.8 21.4,18.6 2.6,18.6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="miter"
      />
      <polygon
        points="12,22.2 2.6,5.4 21.4,5.4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Menorah({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={cn("shrink-0", className)} fill="none" aria-hidden>
      <path
        d="M8 18v10c0 8 10 12 24 12s24-4 24-12V18"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M32 8v32" stroke="currentColor" strokeWidth="1.8" />
      {[8, 16, 24, 40, 48, 56].map((x) => (
        <path key={x} d={`M${x} 14v14`} stroke="currentColor" strokeWidth="1.4" />
      ))}
      {[8, 16, 24, 32, 40, 48, 56].map((x) => (
        <circle key={`f-${x}`} cx={x} cy="11" r="2.1" fill="currentColor" />
      ))}
    </svg>
  );
}

export function FlagBar({ className }: { className?: string }) {
  return (
    <div
      className={cn("flag-stripes h-2.5 w-full", className)}
      aria-hidden
    />
  );
}

export function ChaiMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-primary tracking-[0.2em] select-none",
        className,
      )}
      aria-hidden
    >
      חי
    </span>
  );
}
