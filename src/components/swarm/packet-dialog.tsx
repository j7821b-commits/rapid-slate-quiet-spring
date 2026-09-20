import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HOUSEHOLDS, LIAISON, NODE } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";
import { formatUsd } from "@/lib/utils";

export function PacketDialog() {
  const packetOpen = useSwarmStore((s) => s.packetOpen);
  const openPacket = useSwarmStore((s) => s.openPacket);
  const household = packetOpen ? HOUSEHOLDS[packetOpen] : null;

  return (
    <Dialog open={Boolean(packetOpen)} onOpenChange={(o) => !o && openPacket(null)}>
      <DialogContent className="max-w-xl border-border bg-paper p-0 text-ink">
        {household ? (
          <div className="px-6 py-6 sm:px-8">
            <DialogHeader>
              <p className="text-xs tracking-[0.16em] uppercase text-ink/50">
                For the visit · sit with them
              </p>
              <DialogTitle className="text-xl text-ink">
                {household.packetTitle}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-2 space-y-4 border-t border-ink/15 pt-4 text-sm leading-relaxed text-ink/80">
              <p>
                Prepared for {household.family} at {household.address}.{" "}
                {LIAISON.name} goes in person. Do not send this through anyone
                else.
              </p>

              {household.packetKind === "rental" ? (
                <ol className="list-decimal space-y-2 pl-4">
                  <li>
                    Knock. Introduce yourself. Make sure you are talking to the
                    household on this folder.
                  </li>
                  <li>
                    Sit with them. Say what this is: city rental help, paid to
                    the Perez Avenue office — the same people who already talk
                    to them about this property. Not a stranger taking cash.
                  </li>
                  <li>
                    Income {formatUsd(household.income)}/mo against the 2026
                    family line of {formatUsd(NODE.fplFamily5)}. Already matched.
                    You are not deciding it at the door.
                  </li>
                  <li>
                    If they agree, they sign. You witness. The paper goes back
                    to the office. Do not collect money. Do not promise cash.
                  </li>
                </ol>
              ) : household.packetKind === "utility" ? (
                <ol className="list-decimal space-y-2 pl-4">
                  <li>
                    Knock. Confirm you are speaking with {household.family}.
                  </li>
                  <li>
                    Sit with them. Explain that CAM can keep the lights on, and
                    that the pledge goes to CPS — not through a middleman, not
                    through a neighbor’s pocket.
                  </li>
                  <li>Hand them one bus pass for the CAM window. Stay with the briefing. Do not sit the intake for them.</li>
                  <li>
                    The neighbor pool stays at the office. Nobody asks for cash
                    at this door.
                  </li>
                </ol>
              ) : (
                <p>
                  Optional check-in only. Confirm it is the household. Ask how
                  they are. No grant path, no money at the door.
                </p>
              )}

              <div className="grid grid-cols-2 gap-3 border border-dashed border-ink/25 p-3 text-xs">
                <div>
                  <p className="text-ink/45">Tenant, in their own hand</p>
                  <p className="mt-6 border-t border-ink/30 pt-1">together</p>
                </div>
                <div>
                  <p className="text-ink/45">Witness at the door</p>
                  <p className="mt-6 border-t border-ink/30 pt-1">{LIAISON.name}</p>
                </div>
              </div>

              <p className="text-xs text-ink/45">
                Demonstration packet · not an official City of San Antonio or CAM form.
                Printed at {NODE.name}.
              </p>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
