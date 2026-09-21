import { Link } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NODE } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";
import { LiveClock } from "./clock";

export function NodeHeader() {
  const reset = useSwarmStore((s) => s.reset);
  const units = useSwarmStore((s) => s.units);
  const active = (["A", "B"] as const).filter((id) => !units[id].resolved).length;

  return (
    <header className="sheet px-5 py-6 sm:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg">
            <span className="font-display text-lg tracking-wide">{NODE.acronym}</span>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-primary uppercase">
              {NODE.expansion}
            </p>
            <h1 className="mt-1 text-3xl text-fg sm:text-4xl">{NODE.name}</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {NODE.trust}
            </p>
            <p className="mt-2 text-sm text-fg">{NODE.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-6">
          <div>
            <p className="text-xs text-muted">Today</p>
            <p className="flex items-center gap-2 text-sm font-medium text-ok">
              <span className="inline-block size-1.5 rounded-full bg-ok" />
              {active === 0 ? "Quiet" : `${active} open folders`}
            </p>
          </div>
          <div className="hidden h-10 w-px bg-border sm:block" />
          <LiveClock />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">The brief</Link>
          </Button>
          <Button variant="ghost" size="sm" onClick={reset} className="ml-auto lg:ml-0">
            <RotateCcw className="size-3.5" />
            Start over
          </Button>
        </div>
      </div>
    </header>
  );
}
