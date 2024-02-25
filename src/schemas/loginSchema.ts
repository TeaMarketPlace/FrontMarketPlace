import * as zod from "zod";

// Object for validation data

export const LoginFormSchema = zod.object({
  // Validation for email
  email: zod.string().email().min(2, { message: "Email is required" }),
  // Validation for password
  password: zod
    .string()
    .min(2, { message: "Do not forget to enter the password !" }),
});

// Create type based on the object
export type LoginFormType = zod.infer<typeof LoginFormSchema>;
