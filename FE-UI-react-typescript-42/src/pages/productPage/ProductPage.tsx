import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Product } from "../../interface";
import { fetchProducts } from "../../services/productService";

const ProductPage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="productPage">
      <div className="container mx-auto p-4 grid md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">{item.body}</p>

            <Link
              to={`/product/${item.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
