import { cn } from "@/lib/utils";
import { HOUSEHOLDS } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";
import { Button } from "@/components/ui/button";
import type { UnitId } from "@/lib/swarm/types";

function padTone(
  id: Extract<UnitId, "A" | "B">,
  resolved: boolean,
  selected: boolean,
) {
  const risk = HOUSEHOLDS[id].risk;
  return {
    fill: resolved
      ? "fill-ok/15"
      : risk === "critical"
        ? "fill-danger/12"
        : "fill-warn/12",
    stroke: selected
      ? "stroke-primary"
      : resolved
        ? "stroke-ok"
        : risk === "critical"
          ? "stroke-danger"
          : "stroke-warn",
    label: resolved
      ? "fill-ok"
      : selected
        ? "fill-primary"
        : risk === "critical"
          ? "fill-danger"
          : "fill-warn",
  };
}

export function DuplexPlan() {
  const selected = useSwarmStore((s) => s.selected);
  const units = useSwarmStore((s) => s.units);
  const selectUnit = useSwarmStore((s) => s.selectUnit);
  const wellnessCheck = useSwarmStore((s) => s.wellnessCheck);
  const attemptLocked = useSwarmStore((s) => s.attemptLocked);

  const statusA = units.A.resolved ? "Stabilized" : "Eviction notice";
  const statusB = units.B.resolved ? "Stabilized" : "Lights at risk";
  const toneA = padTone("A", units.A.resolved, selected === "A");
  const toneB = padTone("B", units.B.resolved, selected === "B");
  const neighbor = selected === "C" || selected === "D" ? HOUSEHOLDS[selected] : null;

  return (
    <div className="sheet p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl text-fg">118 Perez Ave</h2>
        <p className="mt-1 text-sm text-muted">A duplex. Shared porch. Shared drive.</p>
      </div>

      <svg
        viewBox="0 0 640 280"
        className="h-auto w-full"
        role="img"
        aria-label="Plan of the Perez Avenue duplex with Unit A and Unit B"
      >
        <rect x="24" y="36" width="592" height="188" rx="10" className="fill-surface-2" />
        <line
          x1="320"
          y1="52"
          x2="320"
          y2="204"
          className="stroke-border"
          strokeWidth="2"
        />

        <UnitPad
          id="A"
          x={48}
          y={56}
          selected={selected === "A"}
          label="UNIT A"
          family={HOUSEHOLDS.A.family}
          status={statusA}
          onSelect={selectUnit}
          fillClass={toneA.fill}
          strokeClass={toneA.stroke}
          statusClass={toneA.label}
        />
        <UnitPad
          id="B"
          x={336}
          y={56}
          selected={selected === "B"}
          label="UNIT B"
          family={HOUSEHOLDS.B.family}
          status={statusB}
          onSelect={selectUnit}
          fillClass={toneB.fill}
          strokeClass={toneB.stroke}
          statusClass={toneB.label}
        />

        <rect x="150" y="214" width="340" height="14" rx="2" className="fill-border" />
        <text
          x="320"
          y="256"
          textAnchor="middle"
          className="fill-muted"
          style={{ fontSize: 13, fontFamily: "Source Sans 3, sans-serif" }}
        >
          Shared drive
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {(["C", "D"] as const).map((id) => {
          const h = HOUSEHOLDS[id];
          const active = selected === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => selectUnit(id)}
              className={cn(
                "min-h-14 rounded-md px-3 py-2.5 text-left transition-colors duration-150",
                active ? "bg-primary text-primary-fg" : "bg-surface-2 hover:bg-border/60",
              )}
            >
              <p className="text-sm font-medium">{h.family.replace("The ", "")}</p>
              <p className={cn("text-xs", active ? "text-primary-fg/80" : "text-muted")}>
                {h.label}
                {units[id].wellnessDone ? " · checked in" : ""}
              </p>
            </button>
          );
        })}
      </div>

      {neighbor ? (
        <div className="mt-3 rounded-md bg-surface-2 p-3">
          <p className="text-xs text-muted">{neighbor.address}</p>
          <p className="font-display text-lg text-fg">{neighbor.family}</p>
          <p className="mt-1 text-sm text-muted">{neighbor.frictionBody}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="secondary"
              disabled={units[neighbor.id].wellnessDone}
              onClick={() => wellnessCheck(neighbor.id)}
            >
              {units[neighbor.id].wellnessDone
                ? "Already checked in"
                : "Optional wellness visit"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                attemptLocked(
                  "Open ALMA match",
                  "No notice on this folder. ALMA only opens city help when a household is in friction.",
                )
              }
            >
              Request city help
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function UnitPad({
  id,
  x,
  y,
  selected,
  label,
  family,
  status,
  onSelect,
  fillClass,
  strokeClass,
  statusClass,
}: {
  id: UnitId;
  x: number;
  y: number;
  selected: boolean;
  label: string;
  family: string;
  status: string;
  onSelect: (id: UnitId) => void;
  fillClass: string;
  strokeClass: string;
  statusClass: string;
}) {
  return (
    <g
      role="button"
      tabIndex={0}
      className="cursor-pointer"
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <rect
        x={x}
        y={y}
        width="256"
        height="148"
        rx="8"
        className={cn(fillClass, strokeClass)}
        strokeWidth="2"
      />
      {selected ? (
        <rect
          x={x - 4}
          y={y - 4}
          width="264"
          height="156"
          rx="10"
          fill="none"
          className="stroke-primary"
          strokeWidth="1.5"
        />
      ) : null}
      <rect
        x={x + 108}
        y={y + 118}
        width="40"
        height="30"
        rx="2"
        className="fill-surface stroke-border"
        strokeWidth="1.5"
      />
      <text
        x={x + 128}
        y={y + 42}
        textAnchor="middle"
        className="fill-muted"
        style={{ fontSize: 11, letterSpacing: "0.14em", fontFamily: "Source Sans 3, sans-serif" }}
      >
        {label}
      </text>
      <text
        x={x + 128}
        y={y + 74}
        textAnchor="middle"
        className="fill-fg"
        style={{ fontSize: 18, fontWeight: 600, fontFamily: "Fraunces, serif" }}
      >
        {family.replace("The ", "")}
      </text>
      <text
        x={x + 128}
        y={y + 98}
        textAnchor="middle"
        className={statusClass}
        style={{ fontSize: 13, fontFamily: "Source Sans 3, sans-serif" }}
      >
        {status}
      </text>
    </g>
  );
}
