import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/10 text-primary",
        danger: "border-danger/40 bg-danger/15 text-danger",
        warn: "border-warn/40 bg-warn/15 text-warn",
        ok: "border-ok/40 bg-ok/15 text-ok",
        muted: "border-border bg-surface-2 text-muted",
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
