import { useParams } from "react-router"; // ✅ Correct package
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { ProductDetail } from "../interface";
import { motion } from "framer-motion";

const fetchProduct = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data as ProductDetail;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery<ProductDetail>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id,
  });

  if (!id) return <div>Invalid product ID</div>;
  if (isLoading) return <div>Loading product...</div>;
  if (isError || !data) return <div>Error loading product</div>;
  return (
    <div className="p-10">
      <motion.div
        className="border p-4 rounded hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-64 object-cover mb-2 rounded"
        />
        <h1 className="font-bold text-2xl mb-2">{data.title}</h1>
        <p className="text-gray-700 mb-2">{data.description}</p>
        <p className="text-gray-600 font-semibold">${data.price}</p>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
