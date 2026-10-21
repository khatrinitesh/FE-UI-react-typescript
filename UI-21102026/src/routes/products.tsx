
import { MainLayout } from "../components/layout/MainLayout";
import { ProductCard } from "../components/product/ProductCard";
import { useProducts } from "../features/products/product.queries";

export const ProductsPage = () => {
  const {
    data,
    isLoading,
    isError,
  } = useProducts();

  return (
    <MainLayout>

      <section className="bg-black px-6 py-24 text-white lg:px-8">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Collection
          </p>

          <h1 className="mt-5 text-5xl font-bold sm:text-7xl">
            All Products
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/50">
            Explore our complete product collection.
          </p>

        </div>

      </section>


      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {isLoading && (
            <p>Loading products...</p>
          )}

          {isError && (
            <p>
              Failed to load products.
            </p>
          )}

          {data && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {data.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>
          )}

        </div>

      </section>

    </MainLayout>
  );
};