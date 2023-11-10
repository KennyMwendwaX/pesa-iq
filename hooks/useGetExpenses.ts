import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type ExpenseTypes = {
  id: string;
  name: string;
  amount: string;
  date: number;
  category: string;
  frequency: string;
  transaction_type: string;
  description: string;
};

export function useGetExpenses() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["expenseList"],
    queryFn: async () => {
      const { data } = await axios.get("/api/expense");
      return data.expenseList as ExpenseTypes[];
    },
  });

  return { data, isLoading, error };
}
