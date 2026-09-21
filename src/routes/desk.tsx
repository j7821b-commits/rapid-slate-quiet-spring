import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { NodeConsole } from "@/components/swarm/node-console";
import { hasReadBrief } from "@/lib/swarm/brief-gate";

export const Route = createFileRoute("/desk")({ component: Desk });

function Desk() {
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (hasReadBrief()) {
      setOk(true);
      return;
    }
    void navigate({ to: "/", replace: true });
  }, [navigate]);

  if (!ok) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-6">
        <p className="text-sm text-muted">The brief first.</p>
      </div>
    );
  }

  return <NodeConsole />;
}
