
import { createRoot } from 'react-dom/client'
import './index.css'
import { ErrorBoundary } from './pages/errorBoundariesPage/ErrorBoundariesPage'
import { router } from './router/AppRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <>
   <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </>,
)
