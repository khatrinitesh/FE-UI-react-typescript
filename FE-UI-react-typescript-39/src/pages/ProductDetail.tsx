import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import Button from "../components/ui/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, fetchProductById } = useProductStore();
  const navigate = useNavigate();

  const btnBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (id) fetchProductById(id);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="productDetail">
      <Button onClick={btnBack}>Back</Button>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p>{product.body}</p>
    </div>
  );
};

export default ProductDetail;
