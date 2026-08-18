import { useMemo, useState } from "react";
import Loader from "../../components/common/Loader";
import ProductFilter from "../../components/products/ProductFilter";
import ProductList from "../../components/products/ProductList";
import { useProducts } from "../../hooks/useProducts";

export default function Products() {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products],
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = !category || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-20 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Products</h1>

        <p className="mt-3 text-gray-500">Browse our latest products.</p>
      </div>

      <ProductFilter
        search={search}
        category={category}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      <ProductList products={filteredProducts} />
    </section>
  );
}
