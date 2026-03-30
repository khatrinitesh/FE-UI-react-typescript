import { useParams } from "react-router";
import { fetchProductById } from "../../services/api";
import { useQuery } from "@tanstack/react-query";


const ProductDetailPage = () => {
     const { id } = useParams();
       const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;
  return (
    <div className="productDetailPage">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">Product Details</h1>
        <h3>{data?.title}</h3>
        <p>{data?.body}</p>
      </div>
    </div>
  )
}

export default ProductDetailPage
