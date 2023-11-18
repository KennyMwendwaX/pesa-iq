import { Expense } from "@/lib/schema/ExpenseFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddExpense() {
  const queryClient = useQueryClient();
  const { mutate: addExpense, error } = useMutation({
    mutationFn: async (values: Expense) => {
      const options = {
        method: "POST",
        body: JSON.stringify(values),
      };
      const response = await fetch("/api/user/expense", options);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["expenseList"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { addExpense, error };
}
