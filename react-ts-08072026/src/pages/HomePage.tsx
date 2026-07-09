import { Link } from "@tanstack/react-router"
import { ArrowRight, Box, Code2, Layers, Sparkles } from "lucide-react"

import Button from "../components/ui/Button"
import { useAppStore } from "../store/useAppStore"
import { ASSETS } from "../utils/assets"

export default function HomePage() {
  const { count, increase, decrease } = useAppStore()

  const features = [
    {
      title: "TanStack Router",
      description: "Modern file-based routing setup for React TypeScript.",
      icon: <Layers size={22} />,
    },
    {
      title: "TanStack Query",
      description: "Clean API fetching, loading, and error state handling.",
      icon: <Code2 size={22} />,
    },
    {
      title: "Reusable UI",
      description: "Common Button, FieldInput, FieldTextarea, and Loader.",
      icon: <Box size={22} />,
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid min-h-[calc(100vh-160px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <Sparkles size={16} />
            Modern React TypeScript Website
          </div>

          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            Build clean modern websites with React TypeScript.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            This starter uses TanStack Router, TanStack Query, TanStack Form,
            TailwindCSS, Axios, Zustand, Sonner, and Lucide React for a modern
            frontend setup.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/product">
              <Button rightIcon={<ArrowRight size={18} />}>
                View Products
              </Button>
            </Link>

            <Link to="/contact">
              <Button className="bg-white text-slate-950 ring-1 ring-slate-300 hover:bg-slate-100">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Zustand Counter Example
            </p>

            <div className="mt-4 flex items-center gap-4">
              <Button onClick={decrease} className="px-4 py-2">
                -
              </Button>

              <span className="min-w-10 text-center text-2xl font-bold text-slate-950">
                {count}
              </span>

              <Button onClick={increase} className="px-4 py-2">
                +
              </Button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-slate-300/40 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-slate-400/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
            <img
              src={ASSETS.img.hero}
              alt="Hero"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}