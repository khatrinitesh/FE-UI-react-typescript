import { useEffect, useState } from "react";
import type { Reqres } from "../interfaces/reqres";
import { getReqresProducts } from "../services/reqresService";

const ReqresProductList = () => {
  const [products, setProducts] = useState<Reqres[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getReqresProducts();

      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>ReqRes Products</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.data.name}</h2>
          <p>
            Price: ${product.data.price}
          </p>
          {product.data.description && (
            <p>{product.data.description}</p>
          )}
          {product.data.category && (
            <p>Category: {product.data.category}</p>
          )}
          {product.data.image && (
            <img
              src={product.data.image}
              alt={product.data.name}
              width={150}
            />
          )}
        </article>
      ))}
    </div>
  );
};

export default ReqresProductList;