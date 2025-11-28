import { useEffect, useState } from "react";

const Example1 = () => {
  const [posts, setPosts] = useState([]);
  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiURL}`)
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 4)));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 4)));
  });
  return (
    <>
      <h2>Posts</h2>
      {posts.length === 0 && <p>Loading...</p>}
      {posts.map((post: any) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
};

export default Example1;
