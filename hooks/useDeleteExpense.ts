import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteExpense() {
  const queryClient = useQueryClient();
  const { mutate: deleteExpense, error } = useMutation({
    mutationFn: async (id: string) => {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`/api/user/expense/${id}/delete`, options);
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
  return { deleteExpense, error };
}
