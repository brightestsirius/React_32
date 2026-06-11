import * as zod from "zod";

export const profileSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().min(1, "Email is required").email("Invalid email"),
  phone: zod.string().min(10, "Phone must be at least 10 characters"),
});

export const changePasswordSchema = zod
  .object({
    currentPassword: zod.string().min(6),

    newPassword: zod.string().min(6),

    confirmPassword: zod.string().min(6),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
