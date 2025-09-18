import { useEffect, useState } from "react";
import type { PostProps } from "../../interface";
import { fetchPosts } from "../../apiService/api";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="service-page container spacingContent">
      <h1 className="text-[30px] font-bold">Service List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/services/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicePage;
