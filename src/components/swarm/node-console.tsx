import { useEffect } from "react";
import { Toaster } from "sonner";
import { NodeHeader } from "./header";
import { MoneyRail } from "./money-rail";
import { DuplexPlan } from "./duplex-plan";
import { SubsetMosaic } from "./subset-mosaic";
import { UnitCard } from "./unit-card";
import { LiaisonDesk } from "./liaison-desk";
import { EventLog } from "./event-log";
import { TrajectoryChart } from "./trajectory";
import { PacketDialog } from "./packet-dialog";
import { useSwarmStore } from "@/lib/swarm/store";

export function NodeConsole() {
  const units = useSwarmStore((s) => s.units);
  const hydrate = useSwarmStore((s) => s.hydrate);
  const clear = units.A.resolved && units.B.resolved;

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <NodeHeader />
        <MoneyRail />

        {clear ? (
          <div className="sheet border border-ok/25 bg-ok/10 px-5 py-3 text-sm text-ok">
            Both Perez families are stable. The office has the paper. The
            building is still standing. Start over to visit the folders again.
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <DuplexPlan />
          </div>
          <div className="lg:col-span-2">
            <SubsetMosaic />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <UnitCard id="A" />
          <UnitCard id="B" />
          <LiaisonDesk />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <TrajectoryChart />
          </div>
          <div className="lg:col-span-2">
            <EventLog />
          </div>
        </div>

        <footer className="pb-6 text-center text-xs text-subtle">
          A demonstration of ALMA. Not an official City of San Antonio, Bexar
          County, CPS Energy, or CAM office. Households are fictional.
        </footer>
      </div>

      <PacketDialog />
      <Toaster
        theme="light"
        position="bottom-right"
        toastOptions={{
          className: "bg-surface border-border text-fg",
        }}
      />
    </div>
  );
}
