import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/brief")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
