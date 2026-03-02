import { useEffect } from "react";
import { Link } from "react-router";
import { PATH } from "../router/path";
import { useProductStore } from "../store/useProductStore";

const Products = () => {
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="productList grid gap-4">
      {products.slice(0, 10).map((p) => (
        <Link key={p.id} to={`${PATH.PRODUCTS}/${p.id}`}>
          <div className="p-4 shadow rounded-xl hover:bg-gray-100">
            {p.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
