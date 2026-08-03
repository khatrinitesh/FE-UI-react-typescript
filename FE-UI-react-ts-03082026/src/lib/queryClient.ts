import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Time before data becomes stale
      staleTime: 1000 * 60 * 5, // 5 minutes

      // Time unused cache stays in memory (v5)
      gcTime: 1000 * 60 * 10, // 10 minutes

      // Retry failed requests
      retry: 2,

      // Disable refetch when window gains focus
      refetchOnWindowFocus: false,

      // Refetch when reconnecting to internet
      refetchOnReconnect: true,

      // Refetch when component remounts if data is stale
      refetchOnMount: true,
    },

    mutations: {
      retry: 1,
    },
  },
});
