import { createFileRoute } from "@tanstack/react-router";
import { MainLayout } from "../components/MainLayout";
export const Route = createFileRoute("/about")({ component: About });
function About() {
  return (
    <MainLayout>
      <p className="text-sm font-bold uppercase tracking-[.22em] text-amber-300">
        About
      </p>
      <h1 className="mt-4 text-5xl font-black">
        Thoughtful interfaces, clearly built.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        This page uses the shared main layout; the logo changes when the route
        is no longer the homepage.
      </p>
    </MainLayout>
  );
}
