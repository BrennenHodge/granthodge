import { createFileRoute } from "@tanstack/react-router";
import { GrantSite } from "@/components/grant-site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <GrantSite />;
}
