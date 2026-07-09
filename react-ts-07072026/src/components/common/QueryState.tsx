

import type { ReactNode } from 'react';
import { Loader } from './Loader';

interface QueryStateProps<TData> {
  data: TData | undefined
  isLoading: boolean
  error: Error | null
  emptyMessage?: string
  children: (data: TData) => ReactNode
}

export function QueryState<TData>({
  data,
  isLoading,
  error,
  emptyMessage = 'No data found.',
  children,
}: QueryStateProps<TData>) {
  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
        <h2 className="text-base font-bold">Something went wrong</h2>
        <p className="mt-1 text-sm">{error.message}</p>
      </div>
    )
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return <p className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600">{emptyMessage}</p>
  }

  return <>{children(data)}</>
}
