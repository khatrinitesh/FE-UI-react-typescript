import {
  Link,
  useRouter,
} from "@tanstack/react-router";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <p className="text-7xl font-bold text-brand-600">
        404
      </p>

      <h1 className="mt-4 text-3xl font-bold">
        Page not found
      </h1>

      <p className="mt-3 text-zinc-600">
        The page you requested does not exist.
      </p>

      <Link to="/" className="mt-6">
        <Button>Go home</Button>
      </Link>
    </main>
  );
}

export function ErrorPage({
  error,
}: {
  error: Error;
}) {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <p className="text-6xl">⚠️</p>

      <h1 className="mt-4 text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-zinc-600">
        {import.meta.env.DEV
          ? error.message
          : "Please try again."}
      </p>

      <Button
        className="mt-6"
        onClick={() => void router.invalidate()}
      >
        Try again
      </Button>
    </main>
  );
}