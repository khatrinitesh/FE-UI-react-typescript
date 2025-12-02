import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { PATHS } from "../routes/path";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data.products as Product[];
};

const Products: React.FC = () => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading products...</div>;
  if (isError || !data) return <div>Error fetching products</div>;

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.map((product: any) => (
        <motion.div
          key={product.id}
          className="border p-4 rounded hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <Link
            to={PATHS.PRODUCT_DETAIL(product.id)}
            className="text-blue-500 underline mt-2 block"
          >
            View Details
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
