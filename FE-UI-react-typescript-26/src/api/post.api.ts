import { API_URL } from "../constants/constants";
import type { Post } from "../interface";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
