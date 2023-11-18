import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteGoal() {
  const queryClient = useQueryClient();
  const { mutate: deleteGoal, error } = useMutation({
    mutationFn: async (id: string) => {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`/api/user/goals/${id}/delete`, options);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goalList"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { deleteGoal, error };
}
