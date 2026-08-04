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

export interface UpdatePostPayload {
  userId?: number;
  title?: string;
  body?: string;
}
