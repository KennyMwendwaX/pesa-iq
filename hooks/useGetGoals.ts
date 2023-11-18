import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Goal = {
  id: string;
  name: string;
  amount: string;
  target_date: Date;
  type: string;
  description: string;
  status: "in progress" | "fulfilled";
  createdAt: Date;
};

export function useGetGoals() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["goalList"],
    queryFn: async () => {
      const { data } = await axios.get("/api/user/goals");
      return data.goalList as Goal[];
    },
  });

  return { data, isLoading, error };
}
