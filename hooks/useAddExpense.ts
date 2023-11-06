import { ExpenseForm } from "@/components/AddExpenseModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddExpense() {
  const queryClient = useQueryClient();
  const { mutate: addExpense, error } = useMutation({
    mutationFn: async (values: ExpenseForm) => {
      const options = {
        method: "POST",
        body: JSON.stringify(values),
      };
      const response = await fetch("/api/expense", options);
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
