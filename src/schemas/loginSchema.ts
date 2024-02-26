import * as zod from "zod";

// Object for validation data
export const LoginFormSchema = zod.object({
  // Validation for email
  email: zod.string().email().min(2, { message: "Email is required" }),
  // Validation for password
  password: zod
    .string()
    .min(6, { message: "Password requires at least six charachters" })
    .regex(/^(?=.*[A-Za-zА-Яа-я])(?=.*\d).+/, {message: "Password should consist with at least one capital letter and one digit"}),
});

// Create type based on the object
export type LoginFormType = zod.infer<typeof LoginFormSchema>;
