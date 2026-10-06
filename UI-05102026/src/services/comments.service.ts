export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const API_URL = import.meta.env.VITE_API_URL

export async function getComments(): Promise<Comment[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch comments")
  }

  return response.json()
}