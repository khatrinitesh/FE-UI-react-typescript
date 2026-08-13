import { Link } from "@tanstack/react-router";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product One",
      description: "This is product one.",
      price: 999,
    },
    {
      id: 2,
      name: "Product Two",
      description: "This is product two.",
      price: 1499,
    },
    {
      id: 3,
      name: "Product Three",
      description: "This is product three.",
      price: 1999,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>

            <p className="mt-2 text-gray-600">{product.description}</p>

            <p className="mt-4 font-semibold">₹{product.price}</p>

            <Link
              to="/products/$productId"
              params={{
                productId: String(product.id),
              }}
              className="mt-6 inline-flex rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              View Product
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
