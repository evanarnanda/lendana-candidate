import { date } from "drizzle-orm/pg-core";
import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(1, "Please provide your full name.").max(255),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Please provide your password.").max(255),
  confirmPassword: z.string().min(1, "Please reinput your password.").max(255),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
export type SignupInput = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(8, "Password is too short. Minimum 8 characters required.")
    .max(255),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  token: z.string().min(1, "Invalid token"),
  password: z.string().min(8, "Password is too short").max(255),
});
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

export const biodataSchema = z.object({
  nik: z.number().min(16, "Please provide your full NIK.").max(16),
  fullname: z.string().min(1, "Please enter your Full Name"). max(255),
  gender: z.string().nullable(),
  bloodtype: z.string().nullable(),
  maritalstatus: z.string().nullable(),
  placeofbirth: z.string().nullable(),
  dateofbirth: z.string().date().nullable(), 
  religion: z.string().nullable(),
  nationality: z.string().nullable(),
})
export type BiodataInput = z.infer<typeof biodataSchema>;