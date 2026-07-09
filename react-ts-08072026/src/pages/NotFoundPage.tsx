import { Link } from "@tanstack/react-router"
import { Home } from "lucide-react"
import Button from "../components/ui/Button"

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Page Not Found
        </p>

        <h1 className="mt-4 text-8xl font-black tracking-tight md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold md:text-4xl">
          This page does not exist
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-400">
          The page you are looking for may have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <Link to="/">
          <Button
            leftIcon={<Home size={18} />}
            className="mt-8 bg-white text-slate-950 hover:bg-slate-200"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  )
}