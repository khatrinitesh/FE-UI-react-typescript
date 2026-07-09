import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { QueryState } from '../components/common/QueryState'
import { PageShell } from '../components/pages/PageShell'
import { productService } from '../services/product.service'

export const Route = createFileRoute('/product-details')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: Number(search.id ?? 1),
    }
  },
  component: ProductDetailsPage,
})

function ProductDetailsPage() {
  const { id } = Route.useSearch()

  const productQuery = useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  })

  return (
    <PageShell
      eyebrow="Product details"
      title="Product Details Page"
      description="Single product data is displayed using the id from the URL search params."
    >
      <QueryState
        data={productQuery.data}
        isLoading={productQuery.isPending}
        error={productQuery.error}
      >
        {(product) => (
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Product #{product.id}
            </span>

            <h1 className="mt-4 text-2xl font-black capitalize text-slate-950 dark:text-white">
              {product.title}
            </h1>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {product.body}
            </p>
          </article>
        )}
      </QueryState>
    </PageShell>
  )
}