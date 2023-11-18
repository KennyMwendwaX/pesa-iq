import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteIncome() {
  const queryClient = useQueryClient();
  const { mutate: deleteIncome, error } = useMutation({
    mutationFn: async (id: string) => {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`/api/user/income/${id}/delete`, options);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["incomeList"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { deleteIncome, error };
}
