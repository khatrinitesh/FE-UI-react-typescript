import { Link } from "@tanstack/react-router";

interface ProductDetailProps {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailProps) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <Link to="/products" className="text-sm text-gray-500 hover:text-black">
        ← Back to Products
      </Link>

      <div className="mt-8 rounded-xl border border-gray-200 p-6">
        <p className="text-sm text-gray-500">Product ID</p>

        <h1 className="mt-2 text-3xl font-bold">Product {productId}</h1>

        <p className="mt-4 text-gray-600">
          This is the detail page for product {productId}.
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;
