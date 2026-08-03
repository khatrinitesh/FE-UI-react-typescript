import { axiosInstance } from "./axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CreatePostPayload {
  title: string;
  body: string;
  userId: number;
}

/**
 * Get all posts
 */
export const getPosts = async (): Promise<Post[]> => {
  const { data } = await axiosInstance.get<Post[]>("/posts");
  return data;
};

/**
 * Get single post
 */
export const getPostById = async (id: number): Promise<Post> => {
  const { data } = await axiosInstance.get<Post>(`/posts/${id}`);
  return data;
};

/**
 * Create post
 */
export const createPost = async (payload: CreatePostPayload): Promise<Post> => {
  const { data } = await axiosInstance.post<Post>("/posts", payload);
  return data;
};

/**
 * Update entire post
 */
export const updatePost = async (
  id: number,
  payload: CreatePostPayload,
): Promise<Post> => {
  const { data } = await axiosInstance.put<Post>(`/posts/${id}`, payload);

  return data;
};

/**
 * Partially update post
 */
export const patchPost = async (
  id: number,
  payload: Partial<CreatePostPayload>,
): Promise<Post> => {
  const { data } = await axiosInstance.patch<Post>(`/posts/${id}`, payload);

  return data;
};

/**
 * Delete post
 */
export const deletePost = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/posts/${id}`);
};
