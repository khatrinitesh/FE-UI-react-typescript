export const fetchPosts = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL_JSONPLACEHOLDER}/posts`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
};

export const fetchPostById = async (id: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL_JSONPLACEHOLDER}/posts/${id}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
};
