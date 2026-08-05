import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { motion } from "framer-motion";
import { Code2, Palette, Variable } from "lucide-react";
import BreakpointContent from "../components/BreakpointContent";
import { FlickeringGrid } from "../components/FlickeringGrid";
import { FlipCard } from "../components/FlipCard";
import { FlipImage } from "../components/FlipImage";
import { MainLayout } from "../components/MainLayout";
import { Slider } from "../components/Slider";

const skills = [
  {
    title: "UI Design",
    description: "Clean interfaces built with a strong visual hierarchy.",
    icon: Palette,
  },
  {
    title: "Development",
    description: "Responsive, accessible React experiences with TypeScript.",
    icon: Code2,
  },
];

type Post = { id: number; title: string; body: string };

export const Route = createFileRoute("/")({ component: Home });
function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      (
        await axios.get<Post[]>(`${import.meta.env.VITE_API_BASE_URL}/posts`, {
          params: { _limit: 3 },
        })
      ).data,
  });
  return (
    <MainLayout>
      <BreakpointContent />
      <Variable />
      <FlipCard
        front={
          <FlipImage
            src="/assets/img/hero-image.png"
            alt="Hero visual"
            direction="horizontal"
            className="h-full w-full object-cover"
          />
        }
        back={
          <div className="grid h-full place-items-center bg-primary p-8 text-center text-secondary">
            <div>
              <h3 className="text-2xl font-bold">Creative Development</h3>
              <p className="mt-3 text-sm font-medium">
                Click again to view the image.
              </p>
            </div>
          </div>
        }
      />
      <FlipImage
        src="/assets/img/hero-image.png"
        alt="Hero visual"
        direction="horizontal"
        className="h-80 w-full object-cover"
      />
      <section className="grid gap-5 tablet:grid-cols-2">
        {skills.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-secondary p-8"
          >
            <FlickeringGrid className="transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <Icon className="text-primary" size={36} />

              <h2 className="mt-16 text-2xl font-bold text-foreground">
                {title}
              </h2>

              <p className="mt-3 max-w-sm text-base font-regular text-muted">
                {description}
              </p>
            </div>
          </article>
        ))}
      </section>
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm font-bold uppercase tracking-[.22em] text-amber-300">
          React starter
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">
          Simple structure. Strong foundation.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          A routed React TypeScript starter with reusable form controls and
          server-state fetching.
        </p>
      </motion.section>
      <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Interactive controls
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-400">
            Use the slider below to preview the style and motion of this starter
            UI.
          </p>
          <Slider
            label="Experience intensity"
            description="Control the sample value with a native range input."
            min={0}
            max={100}
            step={5}
            initialValue={40}
          />
        </div>

        <section className="grid gap-4">
          <h2 className="sr-only">Latest posts</h2>
          {isLoading ? (
            <p className="text-zinc-400">Loading posts…</p>
          ) : (
            data?.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-bold capitalize">{post.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
                  {post.body}
                </p>
              </article>
            ))
          )}
        </section>
      </section>
    </MainLayout>
  );
}
