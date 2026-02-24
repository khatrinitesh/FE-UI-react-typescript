import { useParams } from "react-router";
import { useProductStore } from "../store/useProductStore";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductStore();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.body}</p>
    </div>
  );
};

export default ProductDetail;
