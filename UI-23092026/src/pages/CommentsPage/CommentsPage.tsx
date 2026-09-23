import { useEffect } from "react";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import { useCommentStore } from "../../stores/comment.store";

export default function CommentsPage() {
  const comments = useCommentStore((state) => state.comments);
  const loading = useCommentStore((state) => state.loading);
  const error = useCommentStore((state) => state.error);
  const fetchComments = useCommentStore((state) => state.fetchComments);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Comments</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment) => (
          <article key={comment.id} className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">{comment.name}</h2>
            <p className="mt-1 text-sm text-gray-500">{comment.email}</p>
            <p className="mt-4 text-gray-700">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
