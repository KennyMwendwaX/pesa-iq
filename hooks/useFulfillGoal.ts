import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFulfillGoal() {
  const queryClient = useQueryClient();
  const { mutate: fulfillGoal, error } = useMutation({
    mutationFn: async (id: string) => {
      const options = {
        method: "PUT",
      };
      const response = await fetch(`/api/user/goals/${id}/fulfill`, options);
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
