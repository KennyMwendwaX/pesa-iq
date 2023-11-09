import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddGoal() {
  const queryClient = useQueryClient();
  const { mutate: fulfillGoal, error } = useMutation({
    mutationFn: async (id: string) => {
      const options = {
        method: "POST",
      };
      const response = await fetch(`/api/goals/${id}/fulfill`, options);
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
  return { fulfillGoal, error };
}
