import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "font-display text-xs tracking-[0.16em] text-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
