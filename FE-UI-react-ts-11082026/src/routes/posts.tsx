import { createFileRoute } from "@tanstack/react-router";
import PostsPage from "../pages/posts/PostsPage";

export const Route = createFileRoute("/posts")({
  component: PostsPage,
});
