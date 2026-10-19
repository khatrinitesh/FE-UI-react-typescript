import { useEffect, useState } from "react";
import type { Product } from "../interfaces/product";
import { getFake } from "../services/fakeService";


const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getFake();
      setProducts(data);
    } catch (error) {
      console.error(error);
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
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            width={150}
          />

          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>Rating - {product.rating.rate} | Count - {product.rating.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;