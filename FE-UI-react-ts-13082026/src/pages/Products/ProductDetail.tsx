import { useParams } from "@tanstack/react-router";

const ProductDetail = () => {
  const { productId } = useParams({
    from: "/products/$productId",
  });

  return (
    <section>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
    </section>
  );
};

export default ProductDetail;
