import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { AlertTriangle, Home } from "lucide-react";

function BareState({ title, message }: { title: string; message: string }) {
  return (
    <section className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <AlertTriangle className="mx-auto mb-5 text-amber-300" size={42} />
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-3 text-zinc-400">{message}</p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3 text-sm font-bold text-zinc-950"
        >
          <Home size={16} />
          Back home
        </Link>
      </div>
    </section>
  );
}
export const Route = createRootRoute({
  component: Outlet,
  errorComponent: () => (
    <BareState
      title="Something went wrong"
      message="Please try again in a moment."
    />
  ),
  notFoundComponent: () => (
    <BareState
      title="404 — Page not found"
      message="The page you requested does not exist."
    />
  ),
});
