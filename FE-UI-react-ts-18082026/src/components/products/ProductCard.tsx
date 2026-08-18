import { Link } from "react-router";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-60 w-full object-cover"
        />

        <div className="p-5">
          <p className="mb-2 text-xs uppercase text-gray-500">
            {product.category}
          </p>

          <h2 className="mb-2 line-clamp-1 text-lg font-semibold">
            {product.title}
          </h2>

          <p className="mb-4 line-clamp-2 text-sm text-gray-500">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              {formatPrice(product.price)}
            </span>

            <span className="text-sm text-yellow-600">★ {product.rating}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
