import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../components/UI/button/Button";
import type { ProductSection } from "../../interface";
import { fetchProductById } from "../../services/api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const btnBack = () => {
    navigate(-1);
  };
  const { data, isLoading, isError, error } = useQuery<ProductSection[]>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log(error);
    return <div>Error Loading product</div>;
  }
  return (
    <div className="productDetailPage">
      <div className="container mx-auto">
        <Button onClick={btnBack}>Back</Button>
        <h1 className="text-xl font-bold">{data?.title}</h1>
        <p className="mt-2 text-gray-600">{data?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
