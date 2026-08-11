import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import Loader from "../components/common/Loader";
import { getProducts } from "../services/product.service";

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <Loader size={32} />
      </section>
    );
  }

  if (isError) {
    throw new Error("Unable to load products.");
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="text-4xl font-bold">Products</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-gray-200 p-6"
          >
            <span className="text-sm text-gray-400">#{product.id}</span>

            <h2 className="mt-3 line-clamp-2 text-xl font-semibold capitalize">
              {product.title}
            </h2>

            <p className="mt-3 line-clamp-3 text-gray-500">
              {product.description}
            </p>

            <Link
              to="/products/$productId"
              params={{
                productId: String(product.id),
              }}
              className="mt-5 inline-flex font-semibold underline"
            >
              View Product
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
