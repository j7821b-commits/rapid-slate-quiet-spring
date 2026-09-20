import { useEffect, useRef } from "react";
import {
  CircleAlert,
  CircleCheck,
  Info,
  Lock,
  NotebookPen,
  UserRoundCheck,
} from "lucide-react";
import { useSwarmStore } from "@/lib/swarm/store";
import type { LogKind } from "@/lib/swarm/types";

const KIND: Record<LogKind, { icon: typeof Info; className: string }> = {
  info: { icon: Info, className: "text-muted" },
  action: { icon: NotebookPen, className: "text-fg" },
  human: { icon: UserRoundCheck, className: "text-primary" },
  success: { icon: CircleCheck, className: "text-ok" },
  lock: { icon: Lock, className: "text-danger" },
};

export function EventLog() {
  const logs = useSwarmStore((s) => s.logs);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [logs.length]);

  return (
    <section className="sheet flex min-h-72 flex-col p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-xl text-fg">Desk notes</h2>
          <p className="text-sm text-muted">What came in. What went out.</p>
        </div>
        <CircleAlert className="size-4 text-subtle" />
      </div>
      <div
        ref={scroller}
        className="log-scroll max-h-96 min-h-0 flex-1 overflow-y-auto pr-1"
      >
        {logs.map((entry) => {
          const meta = KIND[entry.kind];
          const Icon = meta.icon;
          const time =
            entry.at === 0
              ? "--:--"
              : new Date(entry.at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                });
          return (
            <div
              key={entry.id}
              className="log-enter mb-3 border-l-2 border-border py-1 pl-3"
            >
              <div className="flex items-start gap-2">
                <Icon className={`mt-0.5 size-3.5 shrink-0 ${meta.className}`} />
                <p className="text-sm leading-snug text-fg">
                  <span className="mr-2 text-xs text-subtle">{time}</span>
                  {entry.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
