import { useEffect, useState } from "react";
import { fetchPosts } from "../../services/api";
import { Link } from "react-router";
import type { Post } from "../../interface";

const ProductList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/products/${post.id}`}>
              {post.title.length > 50
                ? post.title.slice(0, 50) + "..."
                : post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
