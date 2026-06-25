import { Link } from "react-router";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-5 text-center text-white">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-gray-300">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="mt-8">
        <Button color1="#ffffff" color2="#111827">
          Back to Home
        </Button>
      </Link>
    </section>
  );
}
