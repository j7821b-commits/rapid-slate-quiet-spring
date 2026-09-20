import { cn } from "@/lib/utils";
import { PIPELINE_LABELS, PIPELINE_ORDER } from "@/lib/swarm/catalog";
import { phaseIndex } from "@/lib/swarm/store";
import type { SwarmPhase } from "@/lib/swarm/types";

export function Pipeline({ phase }: { phase: SwarmPhase }) {
  const idx = phaseIndex(phase);
  const analogStart = PIPELINE_ORDER.indexOf("analog_ready");

  return (
    <ol className="flex flex-wrap gap-1.5">
      {PIPELINE_ORDER.map((step, i) => {
        const done = idx > i + 1;
        const current = PIPELINE_ORDER[idx - 1] === step || phase === step;
        const visit = i >= analogStart;
        const layer = visit ? "visit" : "office";
        return (
          <li
            key={step}
            aria-label={`${PIPELINE_LABELS[step]}, ${layer} layer`}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs",
              done && "bg-primary/15 text-primary",
              current && !done && "bg-fg text-bg",
              !done && !current && "bg-surface-2 text-subtle",
            )}
          >
            {PIPELINE_LABELS[step]}
          </li>
        );
      })}
    </ol>
  );
}
