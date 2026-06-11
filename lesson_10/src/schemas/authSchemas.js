import { z as zod } from "zod";

export const loginSchema = zod.object({
  email: zod.string().min(1, "Email is required").email("Invalid email"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  email: zod.string().min(1, "Email is required").email("Invalid email"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
});
