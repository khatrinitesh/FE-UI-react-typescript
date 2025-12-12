import { useParams } from "react-router";
import type { IPost } from "../interface";
import { getPosts } from "../common/api/postsService";
import { useQuery } from "@tanstack/react-query";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<IPost[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const post = posts?.find((p) => p.id === Number(id));

  if (!post) return <div>Post not found!</div>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
