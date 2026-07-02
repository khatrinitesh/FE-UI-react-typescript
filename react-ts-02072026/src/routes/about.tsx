
import { createFileRoute } from "@tanstack/react-router"
import { IMAGES } from "../utils/assets"

export const Route = createFileRoute("/about")({
  component: AboutPage,
})

function AboutPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-bold text-gray-900">About Page</h1>

      <p className="mt-4 text-lg text-gray-600">
        This project uses React TypeScript, TanStack Router, TanStack Query,
        TailwindCSS, and reusable layouts.
      </p>

      <img
        src={IMAGES.about}
        alt="About"
        className="mt-8 h-72 w-full rounded-2xl object-cover"
      />
    </section>
  )
}