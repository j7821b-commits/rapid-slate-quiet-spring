import { ArrowDownToLine, ArrowUpFromLine, BookMarked } from "lucide-react";
import { MONEY_RAIL } from "@/lib/swarm/catalog";

const ICONS = {
  in: ArrowDownToLine,
  ledger: BookMarked,
  out: ArrowUpFromLine,
} as const;

export function MoneyRail() {
  return (
    <section className="sheet p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl text-fg">How the money moves</h2>
        <p className="mt-1 text-sm text-muted">
          Government programs first. Held on one book. Paid through the office.
        </p>
      </div>
      <ol className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {MONEY_RAIL.map((step, i) => {
          const Icon = ICONS[step.id];
          return (
            <li key={step.id} className="rounded-md bg-surface-2 px-4 py-4">
              <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-primary uppercase">
                <Icon className="size-3.5" strokeWidth={1.75} />
                {i + 1}. {step.label}
              </p>
              <p className="mt-2 font-display text-lg text-fg">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
