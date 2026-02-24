import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useProductStore } from "../store/useProductStore";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid gap-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.05 }}
          className="p-4 shadow rounded bg-white"
        >
          <h2 className="text-xl font-bold">{product.title}</h2>
          <Link to={`/products/${product.id}`} className="text-blue-500">
            View Details
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
