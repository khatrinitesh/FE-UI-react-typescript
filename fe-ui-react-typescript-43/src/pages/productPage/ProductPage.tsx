import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { fetchPosts } from "../../services/api";

const ProductPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((item: any) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;
