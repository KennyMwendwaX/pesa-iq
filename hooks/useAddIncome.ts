import { Income } from "@/lib/schema/IncomeFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddIncome() {
  const queryClient = useQueryClient();
  const { mutate: addIncome, error } = useMutation({
    mutationFn: async (values: Income) => {
      const options = {
        method: "POST",
        body: JSON.stringify(values),
      };
      const response = await fetch("/api/income", options);
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
  return { addIncome, error };
}
