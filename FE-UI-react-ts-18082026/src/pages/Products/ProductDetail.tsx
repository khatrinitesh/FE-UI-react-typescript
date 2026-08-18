import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../../components/common/Loader";
import { getProduct } from "../../services/productService";
import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        return;
      }

      try {
        const data = await getProduct(Number(productId));
        setProduct(data);
      } catch {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Product Not Found</h1>

        <Link to="/products" className="text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm uppercase text-gray-500">
            {product.category}
          </p>

          <h1 className="mb-5 text-4xl font-bold">{product.title}</h1>

          <p className="mb-6 leading-7 text-gray-600">{product.description}</p>

          <div className="mb-6 text-3xl font-bold">
            {formatPrice(product.price)}
          </div>

          <div className="mb-6 flex gap-5">
            <span>⭐ {product.rating}</span>

            <span>Stock: {product.stock}</span>
          </div>

          <button
            type="button"
            className="rounded-lg bg-black px-6 py-3 font-semibold text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
