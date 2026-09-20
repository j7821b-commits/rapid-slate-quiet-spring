import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BASE_TRAJECTORY } from "@/lib/swarm/catalog";
import { useSwarmStore } from "@/lib/swarm/store";

export function TrajectoryChart() {
  const units = useSwarmStore((s) => s.units);
  const resolvedCount = (["A", "B"] as const).filter((id) => units[id].resolved).length;
  const data = BASE_TRAJECTORY.map((point, i) => {
    if (resolvedCount === 0) return point;
    if (resolvedCount === 1 && i === 3) return { ...point, with: -400 };
    return point;
  });

  return (
    <section className="sheet p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="text-xl text-fg">If nobody comes</h2>
        <p className="mt-1 text-sm text-muted">
          The drop is eviction fees and payday loans. The quiet line is city help
          arriving on time.
        </p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="week"
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              axisLine={{ stroke: "var(--color-border)" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${v}`}
            />
            <Tooltip
              contentStyle={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 10,
                color: "var(--color-fg)",
                fontSize: 12,
              }}
              formatter={(value) => [`$${String(value)}`, ""]}
            />
            <Legend wrapperStyle={{ color: "var(--color-muted)", fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey="without"
              name="No visit"
              stroke="var(--color-danger)"
              strokeDasharray="6 6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="with"
              name="ALMA path"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
