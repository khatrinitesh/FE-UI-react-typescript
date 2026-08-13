import { useQuery } from "@tanstack/react-query";

import { api } from "../../services/api";
import type { Post } from "../../types/post";

export default function PostsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api.get<Post[]>("/posts"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong.</div>;
  }

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
