import type { Product } from "../../features/products/product.type";
import { Card3D } from "../common/Card3D";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
   <Card3D
      maxRotate={10}
      className="rounded-2xl bg-white"
    >
      <div className="overflow-hidden rounded-2xl">

        <div className="overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-64 w-full object-cover"
          />
        </div>

        <div className="p-5">

          <span className="text-sm text-black/40">
            {product.category}
          </span>

          <h3 className="mt-2 text-xl font-semibold">
            {product.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-xl font-bold">
              ${product.price}
            </span>

            <span className="text-sm">
              ⭐ {product.rating}
            </span>

          </div>

        </div>

      </div>
    </Card3D>
  );
};