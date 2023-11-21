import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ArticleData = {
  title: string;
  url: string;
  published_date: string;
  description: string;
  thumbnail: string;
};

export function useGetGoals() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      const { data } = await axios.get("/api/articles");
      return data.coins as ArticleData;
    },
  });

  return { data, isLoading, error };
}
