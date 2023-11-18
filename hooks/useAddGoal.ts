import { Goal } from "@/lib/schema/GoalFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddGoal() {
  const queryClient = useQueryClient();
  const { mutate: addGoal, error } = useMutation({
    mutationFn: async (values: Goal) => {
      const options = {
        method: "POST",
        body: JSON.stringify(values),
      };
      const response = await fetch("/api/user/goals", options);
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
  return { addGoal, error };
}
