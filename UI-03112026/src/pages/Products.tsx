import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import {
    currency,
    products,
} from "../data/products";

export function ProductListPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">
        Products
      </h1>

      <p className="mt-2 text-zinc-600">
        Demo products stored locally.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.07,
            }}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            <Link
              to="/products/$productId"
              params={{
                productId: product.id,
              }}
              className="block"
            >
              <div
                aria-hidden
                className="flex h-48 items-center justify-center bg-indigo-50 text-7xl"
              >
                {product.emoji}
              </div>

              <div className="p-5">
                <span className="text-xs text-zinc-500">
                  {product.category}
                </span>

                <h2 className="mt-2 font-semibold">
                  {product.name}
                </h2>

                <p className="mt-2 font-bold text-brand-600">
                  {currency(product.price)}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ProductDetailPage({
  productId,
}: {
  productId: string;
}) {
  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return (
      <div role="alert">
        <h1 className="text-2xl font-bold">
          Product not found
        </h1>

        <Link
          to="/products"
          className="mt-4 inline-block text-brand-600"
        >
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <section className="grid gap-10 md:grid-cols-2">
      <div
        className="flex min-h-80 items-center justify-center rounded-2xl bg-indigo-50 text-9xl"
        aria-hidden
      >
        {product.emoji}
      </div>

      <div>
        <p className="text-sm text-zinc-500">
          {product.category}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {product.name}
        </h1>

        <p className="mt-5 text-2xl font-bold text-brand-600">
          {currency(product.price)}
        </p>

        <p className="mt-6 text-zinc-600">
          {product.description}
        </p>

        <Link
          to="/products"
          className="mt-8 inline-block text-brand-600"
        >
          ← All products
        </Link>
      </div>
    </section>
  );
}