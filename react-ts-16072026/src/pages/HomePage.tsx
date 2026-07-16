import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

import { getPosts } from '../services/posts'

export function HomePage() {
  const { data = [], isPending, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    <div className="container-page py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-slate-950 px-6 py-16 text-white md:px-12"
      >
        <p className="text-indigo-300">React + TypeScript</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black md:text-6xl">
          A modern starter for scalable frontend projects.
        </h1>
      </motion.section>

      <section className="py-14">
        <h2 className="text-3xl font-bold">Latest posts</h2>

        {isPending && <p className="mt-6">Loading posts...</p>}
        {isError && <p className="mt-6 text-red-600">{error.message}</p>}

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {data.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold capitalize">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{post.body}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
