import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type IncomeTypes = {
  id: string;
  name: string;
  amount: string;
  date: Date;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

export function useGetIncomes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["incomeList"],
    queryFn: async () => {
      const { data } = await axios.get("/api/user/income");
      return data.incomeList as IncomeTypes[];
    },
  });

  return { data, isLoading, error };
}
