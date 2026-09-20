import { BookMarked, DoorClosed, LoaderCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatUsd } from "@/lib/utils";
import { HOUSEHOLDS } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";
import type { SwarmPhase, UnitId } from "@/lib/swarm/types";
import { DeadlineClock } from "./clock";
import { Pipeline } from "./pipeline";

const RISK_BADGE = {
  critical: { variant: "danger" as const, label: "Eviction notice" },
  warning: { variant: "warn" as const, label: "Lights at risk" },
  watch: { variant: "muted" as const, label: "Watch" },
  stable: { variant: "ok" as const, label: "Stable" },
};

const DIGITAL: SwarmPhase[] = ["intercept", "scrape", "match", "autofill"];

export function UnitCard({ id }: { id: UnitId }) {
  const household = HOUSEHOLDS[id];
  const runtime = useSwarmStore((s) => s.units[id]);
  const selected = useSwarmStore((s) => s.selected === id);
  const selectUnit = useSwarmStore((s) => s.selectUnit);
  const deploySwarm = useSwarmStore((s) => s.deploySwarm);
  const deadlineA = useSwarmStore((s) => s.deadlineA);

  const risk = runtime.resolved ? "stable" : household.risk;
  const badge = RISK_BADGE[risk];
  const digitalBusy = DIGITAL.includes(runtime.phase);
  const canDeploy = household.deployable && runtime.phase === "idle" && !runtime.resolved;
  const awaitingAnalog =
    !runtime.resolved &&
    ["analog_ready", "printed", "en_route", "on_site", "analog_complete", "submitted"].includes(
      runtime.phase,
    );

  return (
    <article
      className={cn(
        "sheet relative overflow-hidden p-5 transition-shadow duration-200",
        selected && "ring-2 ring-primary/40",
      )}
      onClick={() => selectUnit(id)}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-muted">
              <DoorClosed className="size-5" strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-xs text-muted">{household.address}</p>
              <h2 className="text-xl text-fg">
                {household.family}
              </h2>
            </div>
          </div>
          <Badge
            variant={badge.variant}
            className={risk === "critical" && !runtime.resolved ? "pulse-danger" : undefined}
          >
            {badge.label}
          </Badge>
        </div>

        <div className="rounded-md bg-surface-2 p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-medium text-primary">Household</p>
            <p className="text-xs text-muted">
              {household.members} people ({household.minors} children)
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
            <dt className="text-muted">Monthly income</dt>
            <dd className="text-right tabular-nums text-fg">
              {formatUsd(household.income)}{" "}
              <span className="text-xs text-subtle">{household.fplLabel}</span>
            </dd>
            <dt className="text-muted">Rent</dt>
            <dd className="text-right tabular-nums text-fg">{formatUsd(household.rent)}</dd>
            <dt className="text-muted">Utilities</dt>
            <dd className="text-right tabular-nums text-fg">
              {formatUsd(household.utilities)}{" "}
              {household.utilitiesPastDue ? (
                <span className="text-xs text-danger">Past due</span>
              ) : null}
            </dd>
          </dl>
        </div>

        <div
          className={cn(
            "rounded-md bg-surface-2 p-3",
            risk === "critical" && "ring-1 ring-danger/30",
            risk === "warning" && "ring-1 ring-warn/30",
          )}
        >
          <p
            className={cn(
              "text-xs font-medium",
              risk === "critical"
                ? "text-danger"
                : risk === "warning"
                  ? "text-warn"
                  : "text-muted",
            )}
          >
            {household.frictionTitle}
          </p>
          <p className="mt-1 text-sm text-fg">{household.frictionBody}</p>
          {id === "A" && !runtime.resolved ? (
            <p className="mt-2 text-xs text-danger">
              Filing clock <DeadlineClock target={deadlineA} />
            </p>
          ) : null}
          {household.deficit > 0 ? (
            <div className="mt-2 flex justify-between text-sm font-medium">
              <span className="text-muted">Needed now</span>
              <span className={risk === "critical" ? "text-danger" : "text-warn"}>
                {formatUsd(-household.deficit)}{" "}
                <span className="text-xs font-normal text-subtle">
                  {household.deficitLabel}
                </span>
              </span>
            </div>
          ) : null}
        </div>

        {runtime.phase !== "idle" && !runtime.resolved ? (
          <Pipeline phase={runtime.phase} />
        ) : null}

        <div>
          {canDeploy ? (
            <Button
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                deploySwarm(id);
              }}
            >
              <BookMarked className="size-4" />
              Find city help
            </Button>
          ) : null}

          {digitalBusy ? (
            <Button className="w-full" disabled>
              <LoaderCircle className="size-4 animate-spin" />
              Matching city programs
            </Button>
          ) : null}

          {awaitingAnalog ? (
            <p className="rounded-md bg-primary/10 px-3 py-2.5 text-center text-sm text-primary">
              Marisol will go see them. Confirm the tenant. Sit together. Paper
              goes through the office.
            </p>
          ) : null}

          {runtime.resolved ? (
            <div className="rounded-md bg-ok/10 px-3 py-2.5 text-sm text-ok">
              Stable. The visit is done. The office has the paper.
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
