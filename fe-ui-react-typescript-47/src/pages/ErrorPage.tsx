import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import Button from "../components/Button";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = error.data?.message || message;
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-red-950 px-5 text-center text-white">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="mt-4 max-w-md text-red-100">{message}</p>

      <Link to="/" className="mt-8">
        <Button color1="#ffffff" color2="#7f1d1d">
          Back to Home
        </Button>
      </Link>
    </section>
  );
}
