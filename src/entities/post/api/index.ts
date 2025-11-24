import { IPost } from "@/entities/post/types";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const apiGetPosts = async (): Promise<IPost[]> => {
  const response = await fetch(`${BASE_URL}/posts`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
};
