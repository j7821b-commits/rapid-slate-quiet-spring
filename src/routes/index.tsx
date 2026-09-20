import { createFileRoute } from "@tanstack/react-router";
import { NodeConsole } from "@/components/swarm/node-console";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <NodeConsole />;
}
