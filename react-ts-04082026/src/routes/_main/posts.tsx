import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Preloader } from "../../components/ui/Preloader";
import { getPosts } from "../../services/posts.service";

export const Route = createFileRoute("/_main/posts")({
  component: PostsPage,
});

function PostsPage() {
  const {
    data: posts,
    isPending,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(12),
  });

  if (isPending) {
    return <Preloader show overlay label="Loading posts" />;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          JSONPlaceholder API
        </p>

        <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
          Posts
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Posts loaded using Axios and TanStack Query.
        </p>
      </header>

      {isError ? (
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="font-bold text-red-800">Posts could not be loaded</h2>

          <p className="mt-2 text-sm text-red-700">
            {error instanceof Error
              ? error.message
              : "An unexpected error occurred."}
          </p>

          <Button
            variant="secondary"
            icon={<RefreshCw size={18} />}
            isLoading={isFetching}
            onClick={() => void refetch()}
            className="mt-5"
          >
            Try again
          </Button>
        </section>
      ) : (
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.04,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-bold text-blue-600">
                POST {String(post.id).padStart(2, "0")}
              </span>

              <h2 className="mt-3 text-lg font-bold capitalize text-slate-900">
                {post.title}
              </h2>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                {post.body}
              </p>
            </motion.article>
          ))}
        </section>
      )}
    </section>
  );
}
