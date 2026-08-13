import Loader from "../../components/Loader/Loader";
import { useProducts } from "../../hooks/useProducts";

export default function ProductList() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Failed to load products.</p>;
  }

  return (
    <section>
      <h1>Products</h1>

      {data?.map((product) => (
        <article key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.body}</p>
        </article>
      ))}
    </section>
  );
}
