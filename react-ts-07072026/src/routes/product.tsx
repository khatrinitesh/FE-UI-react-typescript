
import { useQuery } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';
import { Button } from '../components/common/Button';
import { QueryState } from '../components/common/QueryState';
import { PageShell } from '../components/pages/PageShell';
import { ROUTES } from '../constants/routes.constants';
import { productService } from '../services/product.service';
import { useAppStore } from '../store/app.store';

export const Route = createFileRoute('/product')({
  component: ProductPage,
})

function ProductPage() {
  const setSelectedProductId = useAppStore((state) => state.setSelectedProductId)
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
  })

  return (
    <PageShell
      eyebrow="Product page"
      title="Products from Fetch API"
      description="JSONPlaceholder posts are displayed as products. TanStack Query controls loading, error, cache, and data state."
    >
      <QueryState data={productsQuery.data} isLoading={productsQuery.isPending} error={productsQuery.error}>
        {(products) => (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 12).map((product) => (
              <article key={product.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Product #{product.id}</span>
                <h2 className="mt-3 line-clamp-2 text-lg font-black capitalize text-slate-950 dark:text-white">{product.title}</h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.body}</p>
                <Link
                  to={ROUTES.productDetails}
                  search={{ id: product.id }}
                  className="mt-5"
                  onClick={() => setSelectedProductId(product.id)}
                >
                  <Button type="button" className="w-full">View details</Button>
                </Link>
              </article>
            ))}
          </div>
        )}
      </QueryState>
    </PageShell>
  )
}
