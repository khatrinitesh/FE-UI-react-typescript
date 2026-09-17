import { createFileRoute } from "@tanstack/react-router";
import { usePosts } from "../hooks/use-posts";

export const Route = createFileRoute("/news")({
  component: NewsPage,
});

function NewsPage() {
  const { data: posts, isPending, isError } = usePosts();

  if (isPending) {
    return <div className="mx-auto max-w-7xl px-6 py-20">Loading...</div>;
  }

  if (isError) {
    return <div className="mx-auto max-w-7xl px-6 py-20">Something went wrong.</div>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">Latest updates</p>

        <h1 className="mt-2 text-4xl font-bold">School News</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 9).map((post) => (
          <article key={post.id} className="rounded-xl border border-black/10 p-6">
            <p className="text-sm text-black/50">Post {post.id}</p>

            <h2 className="mt-3 text-xl font-semibold capitalize">{post.title}</h2>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/60">{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
