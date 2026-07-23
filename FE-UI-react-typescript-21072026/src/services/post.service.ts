
import { API_BASE_URL, API_ENDPOINTS } from "../constants/api.constants";
import type { CreatePostPayload, Post } from "../interfaces/post.interface";


async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    `${API_BASE_URL}${API_ENDPOINTS.posts}`,
  );

  return handleResponse<Post[]>(response);
}

export async function createPost(
  payload: CreatePostPayload,
): Promise<Post> {
  const response = await fetch(
    `${API_BASE_URL}${API_ENDPOINTS.posts}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  return handleResponse<Post>(response);
}