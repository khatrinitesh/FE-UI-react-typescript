import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";



import type { CreatePostPayload } from "../interfaces/post.interface";
import { createPost, getPosts } from "../services/post.service";
import { postKeys } from "./post.keys";

export function usePostsQuery() {
  return useQuery({
    queryKey: postKeys.lists(),
    queryFn: getPosts,
    staleTime: 60_000,
  });
}

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreatePostPayload) =>
      createPost(payload),

    onSuccess: (createdPost) => {
      queryClient.setQueryData(
        postKeys.lists(),
        (currentPosts: unknown) => {
          if (!Array.isArray(currentPosts)) {
            return [createdPost];
          }

          return [createdPost, ...currentPosts];
        },
      );
    },
  });
}