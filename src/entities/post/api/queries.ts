import { useQuery } from "@tanstack/vue-query";
import { apiGetPosts } from "./index";
import { IPost } from "../types";

export const usePostsQuery = () => {
  return useQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: apiGetPosts,
    enabled: true,
  });
};

