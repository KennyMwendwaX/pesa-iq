import { z } from "zod";

export const goalFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, { message: "Name must be greater than 2 characters long" })
    .max(20, { message: "Name must be less than 20 characters long" }),
  amount: z
    .string({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a string",
    })
    .min(5, { message: "Amount must be greater than 0" }),
  target_date: z.date({
    required_error: "Target date is required.",
  }),
  type: z.string({
    required_error: "Type is required",
    invalid_type_error: "Type must be a string",
  }),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(2, { message: "Description must be greater than 2 characters long" })
    .max(30, { message: "Description must be less than 30 characters long" }),
});

export type Goal = z.infer<typeof goalFormSchema>;
