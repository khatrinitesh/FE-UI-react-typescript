import { api } from "../lib/api";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CreatePostPayload {
  userId: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts");
  return response.data;
}

export async function getPost(postId: number): Promise<Post> {
  const response = await api.get<Post>(`/posts/${postId}`);
  return response.data;
}

export async function createPost(payload: CreatePostPayload): Promise<Post> {
  const response = await api.post<Post>("/posts", payload);
  return response.data;
}
