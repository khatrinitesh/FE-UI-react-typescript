import { useQuery } from "@tanstack/react-query"
import { createFileRoute, Link, useSearch } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"
import Button from "../components/ui/Button"
import LoaderSpinner from "../components/ui/LoaderSpinner"
import MainLayout from "../layouts/MainLayout"
import { api } from "../lib/axios"

type Product = {
  id: number
  title: string
  body: string
}

type ProductDetailsSearch = {
  id?: number
}

const getProductDetail = async (id: number) => {
  const response = await api.get<Product>(`/posts/${id}`)
  return response.data
}

function ProductDetailsPage() {
  const search = useSearch({
    from: "/product-details",
  }) as ProductDetailsSearch

  const productId = search.id

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product-detail", productId],
    queryFn: () => getProductDetail(productId as number),
    enabled: Boolean(productId),
  })

  if (!productId) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-red-500">Product ID is missing.</p>

        <Link to="/product">
          <Button className="mt-6">Back to Products</Button>
        </Link>
      </section>
    )
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoaderSpinner size={32} />
      </div>
    )
  }

  if (isError || !data) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-red-500">Product not found.</p>

        <Link to="/product">
          <Button className="mt-6">Back to Products</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <Link to="/product">
        <Button
          leftIcon={<ArrowLeft size={18} />}
          className="mb-8 bg-white text-black ring-1 ring-gray-300 hover:bg-gray-100"
        >
          Back to Products
        </Button>
      </Link>

      <article className="rounded-3xl bg-white p-8 shadow-xl">
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          {data.id}
        </span>

        <h1 className="text-3xl font-bold capitalize text-gray-900">
          {data.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">{data.body}</p>
      </article>
    </section>
  )
}

export const Route = createFileRoute()({
  validateSearch: (search: Record<string, unknown>): ProductDetailsSearch => {
    return {
      id: Number(search.id) || undefined,
    }
  },

  component: () => (
    <MainLayout>
      <ProductDetailsPage />
    </MainLayout>
  ),
})