import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import LoaderSection from "../../components/UI/loaderSection/LoaderSection";
import type { Post } from "../../interface";
import { getPosts } from "../../services/postService";

const ProductPage = () => {
  const { data, isLoading, isError, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <LoaderSection />;

  if (isError) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="productPage">
      <div className="container mx-auto">
        <div className="p-6 grid gap-4">
          {data?.slice(0, 10).map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <div className="p-4 border rounded hover:shadow">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
