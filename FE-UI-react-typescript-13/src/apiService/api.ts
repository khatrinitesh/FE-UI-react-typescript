const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const fetchPostById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
};
