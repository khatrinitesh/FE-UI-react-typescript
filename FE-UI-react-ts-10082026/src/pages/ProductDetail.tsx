import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import Loader from "../components/common/Loader";
import { getProduct } from "../services/product.service";

const ProductDetail = () => {
  const { productId } = useParams({
    from: "/_layout/products/$productId",
  });

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(Number(productId)),
  });

  if (isLoading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <Loader size={32} />
      </section>
    );
  }

  if (isError || !product) {
    throw new Error("Product not found.");
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      <span className="text-gray-400">Product #{product.id}</span>

      <h1 className="mt-3 text-4xl font-bold capitalize">{product.title}</h1>

      <p className="mt-6 leading-7 text-gray-600">{product.description}</p>
    </section>
  );
};

export default ProductDetail;
