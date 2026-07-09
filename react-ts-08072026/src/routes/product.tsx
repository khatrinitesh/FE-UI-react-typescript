import { useQuery } from "@tanstack/react-query"
import { createFileRoute, Link } from "@tanstack/react-router"
import LoaderSpinner from "../components/ui/LoaderSpinner"
import MainLayout from "../layouts/MainLayout"
import { api } from "../lib/axios"


type Product = {
  id: number
  title: string
  body: string
}

const getProducts = async () => {
  const response = await api.get<Product[]>("/posts")
  return response.data
}

function ProductPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoaderSpinner size={32} />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-red-500">Something went wrong.</p>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Products</h1>
        <p className="mt-3 text-gray-600">
          Data loaded from JSONPlaceholder API.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.slice(0, 12).map((product) => (
          <Link
            key={product.id}
            to="/product-details"
            search={{ id: product.id }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
              {product.id}
            </span>

            <h2 className="line-clamp-2 text-lg font-semibold capitalize text-gray-900">
              {product.title}
            </h2>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
              {product.body}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export const Route = createFileRoute()({
  component: () => (
    <MainLayout>
      <ProductPage />
    </MainLayout>
  ),
})