import { createFileRoute } from "@tanstack/react-router";
import ProductList from "../../pages/Products/ProductList";

export const Route = createFileRoute("/products/")({
  component: ProductList,
});
