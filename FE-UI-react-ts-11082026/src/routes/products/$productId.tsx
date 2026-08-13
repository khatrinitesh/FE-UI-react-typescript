import { createFileRoute } from "@tanstack/react-router";

import ProductDetail from "../../pages/Products/ProductDetail";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetailRoute,
});

function ProductDetailRoute() {
  const { productId } = Route.useParams();

  return <ProductDetail productId={productId} />;
}
