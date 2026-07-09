export const API_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com/posts'

export const API_ENDPOINTS = {
  products: '',
  productDetails: (id: number | string) => `/${id}`,
} as const
