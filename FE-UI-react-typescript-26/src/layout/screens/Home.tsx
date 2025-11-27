import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/constants";
import { fetchPosts } from "../../api/post.api";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.posts],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <p>Error loading posts...</p>;
  }

  return (
    <div>
      <h1 className="text-red-400 font-bold">Home Page</h1>
      <h2 className="text-3xl font-bold">Posts:</h2>
      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
