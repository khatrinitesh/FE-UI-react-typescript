import type { Post } from '../types/post'
const API_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com/posts'
export async function getPosts(): Promise<Post[]> {
  const response = await fetch(API_URL)
  if (!response.ok) throw new Error(`Unable to load posts (${response.status})`)
  return response.json() as Promise<Post[]>
}
