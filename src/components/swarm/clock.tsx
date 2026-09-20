import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <div className="text-right">
        <p className="text-xs text-muted">Central Time</p>
        <p className="font-mono text-sm tabular-nums text-fg">—</p>
      </div>
    );
  }

  const date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(now);
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Chicago",
  }).format(now);

  return (
    <div className="text-right">
      <p className="text-xs text-muted">Central Time</p>
      <p className="font-mono text-sm tabular-nums text-fg">
        {date} · {time}
      </p>
    </div>
  );
}

export function DeadlineClock({ target }: { target: number }) {
  const [remain, setRemain] = useState<number | null>(null);

  useEffect(() => {
    if (!target) return;
    const tick = () => setRemain(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remain === null) {
    return <span className="font-mono tabular-nums">—</span>;
  }

  const hours = Math.floor(remain / 3_600_000);
  const mins = Math.floor((remain % 3_600_000) / 60_000);
  const secs = Math.floor((remain % 60_000) / 1000);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <span className="font-mono tabular-nums">
      {pad(hours)}:{pad(mins)}:{pad(secs)}
    </span>
  );
}
