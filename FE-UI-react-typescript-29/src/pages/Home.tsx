import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../common/api/postsService";
import type { IPost } from "../interface";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const {
    data: postsData,
    isLoading,
    isError,
    error,
  } = useQuery<IPost[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (postsData) setPosts(postsData);
  }, [postsData]);

  const handleRemove = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  if (isLoading) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div>Error: {error.message}</div>
      </>
    );
  }
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/post-detail/${post.id}`}>{post.id}</Link>
            <br />
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleRemove(post.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
