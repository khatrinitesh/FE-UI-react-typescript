import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
  component: AboutPage,
})  

function AboutPage() {
  return <div className="aboutPage py-12">
    <div className="container">
      <h2 className="mb-2 text-4xl font-bold text-slate-950">
        About Page
      </h2>
    </div>
  </div>
}