import { motion } from "framer-motion"
import { CalendarDays, Clock, Search, User } from "lucide-react"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build Beautiful React Interfaces",
    excerpt:
      "Learn how to create modern, responsive and reusable UI components using React, TypeScript and TailwindCSS.",
    category: "React",
    author: "Nitesh",
    date: "July 2, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "TailwindCSS Tips for Better Layouts",
    excerpt:
      "Simple TailwindCSS techniques to improve spacing, alignment, responsive grids and UI consistency.",
    category: "TailwindCSS",
    author: "Pamisha",
    date: "July 1, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Framer Motion Animation Basics",
    excerpt:
      "Add smooth page animations, hover effects and card transitions using Framer Motion in React.",
    category: "Animation",
    author: "Koushik",
    date: "June 30, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
]

const categories = ["All", "React", "TailwindCSS", "Animation", "TypeScript"]

export default function BlogLayout() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Latest Blog Articles
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Read our latest stories, ideas and development tips
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore articles about React, TypeScript, TailwindCSS, UI design,
              frontend development and animation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">
          {/* Left Blog List */}
          <div>
            {/* Search and Category */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search blog..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Blog */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="h-full min-h-72 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <span className="mb-4 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    Featured
                  </span>

                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                    {blogPosts[0].title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="size-4" />
                      {blogPosts[0].author}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-4" />
                      {blogPosts[0].date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>

                  <button className="mt-7 w-fit rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Read Article
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Blog Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {post.category}
                    </span>

                    <h3 className="mt-4 text-xl font-bold leading-tight">
                      {post.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-bold">About Blog</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A simple modern blog layout built with React, TypeScript,
                TailwindCSS and Framer Motion.
              </p>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-bold">Categories</h3>

              <div className="mt-4 space-y-3">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-900 hover:text-white"
                  >
                    <span>{category}</span>
                    <span>12</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm"
            >
              <h3 className="text-lg font-bold">Subscribe Newsletter</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Get latest frontend articles directly in your inbox.
              </p>

              <input
                type="email"
                placeholder="Enter email"
                className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/10"
              />

              <button className="mt-3 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                Subscribe
              </button>
            </motion.div>
          </aside>
        </div>
      </section>
    </main>
  )
}