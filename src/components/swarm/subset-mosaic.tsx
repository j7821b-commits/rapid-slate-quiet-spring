import { cn } from "@/lib/utils";
import { HOUSEHOLDS, NODE } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";
import type { UnitId } from "@/lib/swarm/types";

const FOLDERS: UnitId[] = ["A", "B", "C", "D"];

export function SubsetMosaic() {
  const units = useSwarmStore((s) => s.units);
  const selectUnit = useSwarmStore((s) => s.selectUnit);
  const selected = useSwarmStore((s) => s.selected);
  const open = (["A", "B"] as const).filter((id) => !units[id].resolved).length;

  return (
    <div className="sheet p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl text-fg">Today’s folders</h2>
        <p className="mt-1 text-sm text-muted">
          {NODE.subsetSize} duplexes share this ledger. {open} need a visit
          today. The rest stay quiet.
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        {FOLDERS.map((id) => {
          const h = HOUSEHOLDS[id];
          const runtime = units[id];
          const active = selected === id;
          const status = runtime.resolved
            ? "Stable"
            : h.risk === "critical"
              ? "Eviction notice"
              : h.risk === "warning"
                ? "Lights at risk"
                : h.risk === "watch"
                  ? "Watch"
                  : "Stable";
          const tone =
            runtime.resolved || h.risk === "stable"
              ? "text-ok"
              : h.risk === "critical"
                ? "text-danger"
                : h.risk === "warning"
                  ? "text-warn"
                  : "text-muted";
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => selectUnit(id)}
                className={cn(
                  "flex min-h-14 w-full items-center justify-between gap-3 rounded-md border-l-4 px-4 py-3 text-left transition-colors duration-150",
                  active
                    ? "border-l-primary-fg bg-primary text-primary-fg"
                    : "border-l-primary bg-surface-2 text-fg hover:bg-border/70",
                )}
              >
                <span>
                  <span className="block text-sm font-medium">
                    {h.label} · {h.family.replace("The ", "")}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      active ? "text-primary-fg/80" : "text-muted",
                    )}
                  >
                    {h.address}
                  </span>
                </span>
                <span className={cn("shrink-0 text-xs font-medium", active ? "text-primary-fg" : tone)}>
                  {status}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
