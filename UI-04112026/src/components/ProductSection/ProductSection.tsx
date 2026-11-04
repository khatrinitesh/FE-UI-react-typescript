import { useProducts } from "../../hooks/useProducts";
import { Loader2 } from "lucide-react";

export default function ProductSection() {
  return (
    <>
      <Products />
    </>
  );
}

function Products() {
  const { data, isPending, isError, error } = useProducts();

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="p-6 text-red-500">
        {error.message || "Failed to load products"}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((product) => (
        <div key={product.id} className="rounded-xl border p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain"
          />
          <h2 className="mt-4 line-clamp-2 font-semibold">{product.title}</h2>
          <p className="mt-2 font-bold text-blue-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
