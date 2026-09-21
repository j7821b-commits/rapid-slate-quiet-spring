import { createFileRoute } from "@tanstack/react-router";
import { Pamphlet } from "@/components/swarm/pamphlet";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Pamphlet />;
}
