import { z } from "zod";

export const nameSchema = z
  .string()
  .trim()
  .min(2, "Enter at least 2 characters")
  .max(80);

export const emailSchema = z.email(
  "Enter a valid email address"
);

export const mobileSchema = z
  .string()
  .regex(
    /^[6-9]\d{9}$/,
    "Enter a valid 10-digit Indian mobile number"
  );

export const messageSchema = z
  .string()
  .trim()
  .min(10, "Enter at least 10 characters")
  .max(1000);

export const passwordSchema = z
  .string()
  .min(
    8,
    "Password must have at least 8 characters"
  );

export const otpSchema = z
  .string()
  .regex(/^\d{6}$/, "Enter a 6-digit OTP");

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  mobile: mobileSchema,
  message: messageSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  mobile: mobileSchema,
  password: passwordSchema,
});

export const verifyOtpSchema = z.object({
  otp: otpSchema,
});

export function validateField<T>(
  schema: z.ZodType<T>,
  value: T
) {
  const result = schema.safeParse(value);

  return result.success
    ? undefined
    : result.error.issues[0]?.message;
}