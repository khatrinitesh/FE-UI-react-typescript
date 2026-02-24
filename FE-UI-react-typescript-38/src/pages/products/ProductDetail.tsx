import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPostById } from "../../services/api";
import type { Post } from "../../interface";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadPost = async () => {
      try {
        const data = await fetchPostById(id);
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, []);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error.</p>;
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{post.title}</h1>
      <p>
        <strong>Product ID:</strong> {post.id}
      </p>
      <p>{post.body}</p>
      <Link
        to="/products"
        style={{ marginTop: "1rem", display: "inline-block" }}
      >
        ← Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
