import type { Post } from "../interface";

const BASE_URL = import.meta.env.VITE_API_URL_PLACEHOLDER;

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPostById(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch post with id ${id}`);
  return res.json();
}
