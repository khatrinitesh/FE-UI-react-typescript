import { ArrowRight, Eye } from "lucide-react";

export default function DisplayElementOnHover() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <article className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
          alt="Mountain landscape"
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Displayed only on hover */}
        <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-slate-950/75 p-6 text-center text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="mb-4 rounded-full bg-white/15 p-3">
            <Eye size={26} />
          </div>

          <h2 className="text-2xl font-semibold">Explore Nature</h2>

          <p className="mt-2 text-sm leading-6 text-slate-200">
            This content becomes visible when you hover over the card.
          </p>

          <button
            type="button"
            className="mt-5 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-100"
          >
            View details
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Always visible */}
        <div className="p-5">
          <h1 className="text-lg font-semibold text-slate-900">
            Mountain Escape
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Hover over the image to display more information.
          </p>
        </div>
      </article>
    </main>
  );
}
