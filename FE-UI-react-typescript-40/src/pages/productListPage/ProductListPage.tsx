import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import type { ProductSection } from "../../interface";
import { PATHS } from "../../routes/path";
import { fetchProducts } from "../../services/api";

const ProductListPage = () => {
  const { data, isLoading, isError, error } = useQuery<ProductSection[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (isError) {
    console.error("❌ Error:", error);
    return (
      <div className="text-center text-red-500">Error loading products...</div>
    );
  }

  return (
    <div className="productListPage">
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Products</h1>

        <div className="space-y-2">
          {data?.map((p) => (
            <Link
              key={p.id}
              to={PATHS.productDetail(p.id)}
              className="block p-3 border rounded hover:bg-gray-100 transition"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
