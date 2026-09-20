import {
  Bus,
  Handshake,
  Home,
  Lock,
  MapPin,
  Printer,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HOUSEHOLDS, LIAISON, LOCKED_ACTIONS } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";
import { formatUsd } from "@/lib/utils";
import type { LiaisonStatus } from "@/lib/swarm/types";

const STATUS_COPY: Record<LiaisonStatus, { label: string; detail: string }> = {
  standby: { label: "At the lobby", detail: "Waiting for a folder" },
  preparing: { label: "Preparing", detail: "Packet is at the printer" },
  en_route: { label: "On the way", detail: "Making time to go see them" },
  on_site: {
    label: "At the door",
    detail: "Confirm the tenant. Sit with them. Explain the help.",
  },
  returning: { label: "Coming back", detail: "Paper returns to the office" },
};

export function LiaisonDesk() {
  const liaisonStatus = useSwarmStore((s) => s.liaisonStatus);
  const routeProgress = useSwarmStore((s) => s.routeProgress);
  const tasks = useSwarmStore((s) => s.tasks);
  const units = useSwarmStore((s) => s.units);
  const fund = useSwarmStore((s) => s.fund);
  const busPasses = useSwarmStore((s) => s.busPasses);
  const fieldNote = useSwarmStore((s) => s.fieldNote);
  const setFieldNote = useSwarmStore((s) => s.setFieldNote);
  const submitFieldNote = useSwarmStore((s) => s.submitFieldNote);
  const printPacket = useSwarmStore((s) => s.printPacket);
  const dispatchLiaison = useSwarmStore((s) => s.dispatchLiaison);
  const collectAnalog = useSwarmStore((s) => s.collectAnalog);
  const attemptLocked = useSwarmStore((s) => s.attemptLocked);

  const status = STATUS_COPY[liaisonStatus];
  const active = tasks[0];
  const phase = active ? units[active.unitId].phase : "idle";

  return (
    <section className="sheet flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex size-12 items-center justify-center rounded-md bg-primary font-display text-sm text-primary-fg">
            MR
          </div>
          <div>
            <p className="text-xs tracking-[0.16em] text-primary uppercase">
              Field desk
            </p>
            <h2 className="text-xl text-fg">{LIAISON.name}</h2>
            <p className="text-xs text-muted">
              {LIAISON.title} · {LIAISON.languages}
            </p>
          </div>
        </div>
        <Badge variant="muted">{status.label}</Badge>
      </div>

      <p className="mt-3 text-sm text-muted">{status.detail}</p>

      <DoorVisit />

      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <Row icon={MapPin} label="Station" value={LIAISON.station} />
        <Row icon={UserRound} label="Shift" value={LIAISON.shift} />
        <Row icon={Printer} label="Printer" value={phase === "analog_ready" ? "Queued" : "Ready"} />
        <Row icon={Bus} label="Bus passes" value={`${busPasses} remaining`} />
      </dl>

      {liaisonStatus === "en_route" ? (
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-xs text-muted">
            <span>On the way</span>
            <span className="tabular-nums">{routeProgress}%</span>
          </div>
          <Progress value={routeProgress} />
        </div>
      ) : null}

      <div className="mt-5 rounded-md bg-surface-2 p-3">
        <p className="text-xs font-medium text-fg">Today’s visit</p>
        {active ? (
          <div className="mt-2 space-y-3">
            <p className="text-sm text-fg">
              {HOUSEHOLDS[active.unitId].family}
            </p>
            <p className="text-xs text-muted">{active.instruction}</p>
            <div className="grid grid-cols-1 gap-2">
              <Button
                size="sm"
                variant={phase === "analog_ready" ? "default" : "secondary"}
                disabled={phase !== "analog_ready"}
                onClick={() => printPacket(active.unitId)}
              >
                <Printer className="size-3.5" />
                Print the packet
              </Button>
              <Button
                size="sm"
                variant={phase === "printed" ? "default" : "secondary"}
                disabled={phase !== "printed"}
                onClick={() => dispatchLiaison(active.unitId)}
              >
                <MapPin className="size-3.5" />
                Go see them
              </Button>
              <Button
                size="sm"
                variant={phase === "on_site" ? "default" : "secondary"}
                disabled={phase !== "on_site"}
                onClick={() => collectAnalog(active.unitId)}
              >
                <Handshake className="size-3.5" />
                {active.packetKind === "utility"
                  ? "Sit with them, then send them on"
                  : "Sit with them and sign together"}
              </Button>
            </div>
          </div>
        ) : (
          <p className="mt-2 text-sm text-subtle">
            Waiting at the lobby. No folder has been handed over yet.
          </p>
        )}
      </div>

      <div className="mt-4">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted">
          <Lock className="size-3" />
          Never at the door — money stays with the office
        </p>
        <div className="grid grid-cols-2 gap-2">
          {LOCKED_ACTIONS.map((action) => (
            <Tooltip key={action.id}>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-auto min-h-11 justify-start py-2 text-left text-xs text-subtle"
                  onClick={() => attemptLocked(action.label, action.reason)}
                >
                  <Lock className="size-3 shrink-0" />
                  {action.label}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{action.reason}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          submitFieldNote();
        }}
      >
        <label htmlFor="field-note" className="text-xs font-medium text-muted">
          What you heard
        </label>
        <textarea
          id="field-note"
          value={fieldNote}
          onChange={(e) => setFieldNote(e.target.value)}
          rows={2}
          maxLength={180}
          placeholder="A note from the visit. It cannot move money."
          suppressHydrationWarning
          className="mt-1 w-full resize-none rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        />
        <Button type="submit" variant="ghost" size="sm" className="mt-1 px-0">
          File note
        </Button>
      </form>

      <div className="mt-auto border-t border-border pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Neighbor pool</span>
          <span className="tabular-nums text-ok">{formatUsd(fund)}</span>
        </div>
        <p className="mt-1 text-xs text-subtle">
          Last resort, and only through the office. {LIAISON.name.split(" ")[0]}{" "}
          does not carry it to the door.
        </p>
      </div>
    </section>
  );
}

function DoorVisit() {
  return (
    <div className="mt-4 rounded-md bg-surface-2 px-3 py-3">
      <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-fg">
        <Home className="size-3.5 text-primary" />
        At the door
      </p>
      <ol className="space-y-2 text-sm text-fg">
        <li>
          <span className="font-medium">Make time.</span>
          <span className="text-muted"> Go see them. Do not send a stranger.</span>
        </li>
        <li>
          <span className="font-medium">Confirm the tenant.</span>
          <span className="text-muted"> Talk to the person on this folder.</span>
        </li>
        <li>
          <span className="font-medium">Describe the help.</span>
          <span className="text-muted">
            {" "}
            City programs, paid through the office that already talks to them
            about this property. Nobody here asks for cash.
          </span>
        </li>
      </ol>
      <p className="mt-2 text-xs text-subtle">
        The building stands and the household stays. Same side. That is the
        whole point.
      </p>
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 rounded-md bg-surface-2 px-2.5 py-2">
      <Icon className="mt-0.5 size-3.5 text-muted" />
      <div>
        <dt className="text-subtle">{label}</dt>
        <dd className="text-fg">{value}</dd>
      </div>
    </div>
  );
}
