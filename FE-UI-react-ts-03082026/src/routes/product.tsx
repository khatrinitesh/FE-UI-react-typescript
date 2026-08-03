import { createFileRoute } from "@tanstack/react-router";
import Product from "../pages/Product/Product";

export const Route = createFileRoute("/product")({
  component: Product,
});
