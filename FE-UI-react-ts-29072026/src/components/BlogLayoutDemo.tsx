import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  Search,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type BlogCategory =
  | "All"
  | "Design"
  | "Development"
  | "Technology"
  | "Business";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Designing digital experiences people remember",
    excerpt:
      "Explore the principles behind meaningful digital products and learn how thoughtful design decisions create stronger user experiences.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
    author: {
      name: "Olivia Martin",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    publishedAt: "July 28, 2026",
    readingTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building scalable React component systems",
    excerpt:
      "A practical guide to structuring reusable components that remain consistent as your application grows.",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    author: {
      name: "Daniel Kim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
    publishedAt: "July 25, 2026",
    readingTime: "6 min read",
  },
  {
    id: 3,
    title: "How artificial intelligence is changing creative work",
    excerpt:
      "Discover how modern teams are combining human creativity with AI-powered workflows.",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    author: {
      name: "Sophia Lee",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    publishedAt: "July 22, 2026",
    readingTime: "5 min read",
  },
  {
    id: 4,
    title: "Creating a product strategy that drives growth",
    excerpt:
      "Learn how successful teams align customer needs, business goals and product execution.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    author: {
      name: "Ethan Walker",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    publishedAt: "July 19, 2026",
    readingTime: "7 min read",
  },
  {
    id: 5,
    title: "The details that make an interface feel premium",
    excerpt:
      "Spacing, typography, animation and feedback states can transform an ordinary interface into a polished experience.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    author: {
      name: "Mia Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
    },
    publishedAt: "July 16, 2026",
    readingTime: "4 min read",
  },
  {
    id: 6,
    title: "Improving frontend performance without complexity",
    excerpt:
      "Simple techniques for reducing load time, improving rendering and delivering faster web applications.",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    author: {
      name: "Noah Williams",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    },
    publishedAt: "July 12, 2026",
    readingTime: "9 min read",
  },
];

const categories: BlogCategory[] = [
  "All",
  "Design",
  "Development",
  "Technology",
  "Business",
];

const categoryStyles: Record<Exclude<BlogCategory, "All">, string> = {
  Design: "bg-violet-500/15 text-violet-300",
  Development: "bg-cyan-500/15 text-cyan-300",
  Technology: "bg-blue-500/15 text-blue-300",
  Business: "bg-amber-500/15 text-amber-300",
};

type ArticleMetaProps = {
  author: BlogPost["author"];
  publishedAt: string;
  readingTime: string;
  light?: boolean;
};

function ArticleMeta({
  author,
  publishedAt,
  readingTime,
  light = false,
}: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <div className="flex items-center gap-2.5">
        <img
          src={author.avatar}
          alt={author.name}
          className="size-8 rounded-full object-cover ring-2 ring-white/10"
        />

        <span
          className={`text-xs font-medium ${
            light ? "text-white/80" : "text-zinc-400"
          }`}
        >
          {author.name}
        </span>
      </div>

      <span
        className={`hidden size-1 rounded-full sm:block ${
          light ? "bg-white/30" : "bg-zinc-700"
        }`}
      />

      <span
        className={`flex items-center gap-1.5 text-xs ${
          light ? "text-white/60" : "text-zinc-500"
        }`}
      >
        <CalendarDays className="size-3.5" />
        {publishedAt}
      </span>

      <span
        className={`flex items-center gap-1.5 text-xs ${
          light ? "text-white/60" : "text-zinc-500"
        }`}
      >
        <Clock3 className="size-3.5" />
        {readingTime}
      </span>
    </div>
  );
}

type FeaturedPostProps = {
  post: BlogPost;
};

function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="group relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 shadow-2xl">
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/40 to-transparent" />

      <div className="relative flex min-h-[520px] flex-col justify-end p-6 sm:p-9 lg:p-12">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
              Featured article
            </span>

            <span
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${categoryStyles[post.category]}`}
            >
              {post.category}
            </span>
          </div>

          <h2 className="font-ogilvy-regular text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <ArticleMeta
              author={post.author}
              publishedAt={post.publishedAt}
              readingTime={post.readingTime}
              light
            />

            <button
              type="button"
              className="group/button inline-flex self-start items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-violet-100 active:scale-95"
            >
              Read article
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

type BlogCardProps = {
  post: BlogPost;
};

function BlogCard({ post }: BlogCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-xl ${categoryStyles[post.category]}`}
        >
          {post.category}
        </span>

        <button
          type="button"
          onClick={() => setSaved((current) => !current)}
          aria-label={saved ? "Remove bookmark" : "Save article"}
          className={`absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border backdrop-blur-xl transition active:scale-90 ${
            saved
              ? "border-violet-300/30 bg-violet-500 text-white"
              : "border-white/15 bg-black/30 text-white hover:bg-white hover:text-black"
          }`}
        >
          <Bookmark className={`size-4 ${saved ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-5 sm:p-6">
        <ArticleMeta
          author={post.author}
          publishedAt={post.publishedAt}
          readingTime={post.readingTime}
        />

        <h3 className="font-ogilvy-regular mt-5 text-2xl leading-snug text-white transition group-hover:text-violet-200">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
          {post.excerpt}
        </p>

        <button
          type="button"
          className="group/action mt-6 flex items-center gap-2 text-sm font-semibold text-white transition hover:text-violet-300"
        >
          Read more
          <ArrowRight className="size-4 transition-transform duration-300 group-hover/action:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

type SidebarSectionProps = {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
};

function SidebarSection({ title, icon: Icon, children }: SidebarSectionProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
          <Icon className="size-4.5" />
        </div>

        <h2 className="font-ogilvy-regular text-lg text-white">{title}</h2>
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}

function NewsletterCard() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-950 via-zinc-950 to-cyan-950 p-6 shadow-2xl">
      <div className="absolute -right-16 -top-16 size-44 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-violet-200">
          <Mail className="size-5" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
          Weekly newsletter
        </p>

        <h2 className="font-ogilvy-regular mt-2 text-2xl text-white">
          Ideas worth reading
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/50">
          Receive design, development and technology insights directly in your
          inbox.
        </p>

        <form
          className="mt-6 space-y-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="h-12 w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
          />

          <button
            type="submit"
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-violet-100 active:scale-[0.98]"
          >
            Subscribe
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <p className="mt-3 text-center text-[11px] text-white/35">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

export default function BlogLayoutDemo() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      if (post.featured) return false;

      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080a] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-52 -top-52 size-[650px] rounded-full bg-violet-600/15 blur-[170px]" />

      <div className="pointer-events-none absolute -bottom-52 -right-52 size-[650px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-12">
          <nav className="mb-14 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white text-black">
                <Sparkles className="size-5" />
              </span>

              <span className="font-ogilvy-regular text-xl">Insight.</span>
            </a>

            <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
              <a href="#" className="text-white">
                Articles
              </a>

              <a href="#" className="transition hover:text-white">
                Topics
              </a>

              <a href="#" className="transition hover:text-white">
                Authors
              </a>

              <a href="#" className="transition hover:text-white">
                About
              </a>
            </div>

            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium transition hover:border-white/20 hover:bg-white/10"
            >
              Subscribe
            </button>
          </nav>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
                Stories and perspectives
              </p>

              <h1 className="font-ogilvy-regular mt-4 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Ideas for building
                <span className="block bg-gradient-to-r from-violet-300 via-cyan-200 to-pink-300 bg-clip-text text-transparent">
                  better digital products
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                Explore articles about design, technology, business and modern
                product development.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-zinc-500" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles..."
                className="h-13 w-full rounded-full border border-white/10 bg-white/[0.05] pl-11 pr-5 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/[0.075] focus:ring-4 focus:ring-violet-500/10"
              />
            </div>
          </div>
        </header>

        <FeaturedPost post={featuredPost} />

        <section className="mt-14">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600">
                Latest stories
              </p>

              <h2 className="font-ogilvy-regular mt-2 text-3xl">
                Explore our articles
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                      isActive
                        ? "border-violet-400/40 bg-violet-500 text-white"
                        : "border-white/10 bg-white/[0.04] text-zinc-500 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {filteredPosts.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-96 flex-col items-center justify-center rounded-[28px] border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 text-zinc-600">
                    <Search className="size-6" />
                  </div>

                  <h3 className="font-ogilvy-regular mt-5 text-xl">
                    No articles found
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                    Try selecting another category or searching with a different
                    keyword.
                  </p>
                </div>
              )}

              {filteredPosts.length > 0 && (
                <button
                  type="button"
                  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] py-4 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  Load more articles
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>

            <aside className="space-y-5">
              <NewsletterCard />

              <SidebarSection title="Popular topics" icon={Sparkles}>
                <div className="space-y-2">
                  {[
                    ["Design Systems", "18"],
                    ["React Development", "14"],
                    ["Artificial Intelligence", "12"],
                    ["Product Strategy", "09"],
                    ["User Experience", "07"],
                  ].map(([topic, count]) => (
                    <button
                      key={topic}
                      type="button"
                      className="group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition hover:bg-white/5"
                    >
                      <span className="min-w-0 flex-1 truncate text-sm text-zinc-400 transition group-hover:text-white">
                        {topic}
                      </span>

                      <span className="text-xs text-zinc-600">{count}</span>

                      <ChevronRight className="size-4 text-zinc-700 transition group-hover:translate-x-0.5 group-hover:text-violet-300" />
                    </button>
                  ))}
                </div>
              </SidebarSection>

              <SidebarSection title="Featured authors" icon={UserRound}>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div
                      key={post.author.name}
                      className="flex items-center gap-3"
                    >
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="size-10 rounded-full object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-zinc-300">
                          {post.author.name}
                        </p>

                        <p className="mt-0.5 text-xs text-zinc-600">
                          {post.category} writer
                        </p>
                      </div>

                      <button
                        type="button"
                        className="text-xs font-medium text-violet-300 transition hover:text-violet-200"
                      >
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </SidebarSection>
            </aside>
          </div>
        </section>

        <footer className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center">
          <p>© 2026 Insight. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
