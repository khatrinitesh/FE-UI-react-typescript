import { api } from "./api";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type CreatePostPayload = Omit<Post, "id">;

type UpdatePostPayload = Partial<CreatePostPayload>;

/**
 * Get all posts
 */
export async function getPosts(limit = 10): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts", {
    params: {
      _limit: limit,
    },
  });

  return response.data;
}

/**
 * Get one post
 */
export async function getPostById(postId: number): Promise<Post> {
  const response = await api.get<Post>(`/posts/${postId}`);

  return response.data;
}

/**
 * Create post
 */
export async function createPost(payload: CreatePostPayload): Promise<Post> {
  const response = await api.post<Post>("/posts", payload);

  return response.data;
}

/**
 * Update complete post
 */
export async function updatePost(
  postId: number,
  payload: CreatePostPayload,
): Promise<Post> {
  const response = await api.put<Post>(`/posts/${postId}`, payload);

  return response.data;
}

/**
 * Update selected post fields
 */
export async function patchPost(
  postId: number,
  payload: UpdatePostPayload,
): Promise<Post> {
  const response = await api.patch<Post>(`/posts/${postId}`, payload);

  return response.data;
}

/**
 * Delete post
 */
export async function deletePost(postId: number): Promise<void> {
  await api.delete(`/posts/${postId}`);
}
