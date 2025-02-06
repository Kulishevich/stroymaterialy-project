import { z } from "zod";
import { validation } from "./validation.errors";

export const emailScheme = () =>
  z
    .string()
    .email({
      message: validation.email,
    })
    .toLowerCase();

export const passwordScheme = () =>
  z
    .string()
    .trim()
    .regex(/^\S*$/, { message: validation.password.noWhiteSpace })
    .min(1, { message: validation.requiredField })
    .max(20, { message: validation.password.maxLength });

export const confirmPasswordScheme = () => z.string().trim();

export const nameScheme = () =>
  z.string().trim().min(1, { message: validation.requiredField });

export const surnameScheme = () =>
  z.string().trim().min(1, { message: validation.requiredField });

export const phoneScheme = () =>
  z
    .string()
    .trim()
    .min(1, { message: validation.requiredField })
    .refine((phone) => phone.startsWith("+374"), {
      message: "Номер должен начинаться с +374",
    })
    .refine((phone) => /^\+374\d{8}$/.test(phone), {
      message: "Номер должен содержать 8 цифр после кода страны",
    });
