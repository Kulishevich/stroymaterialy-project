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
// .refine(
//   (value) =>
//     /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-.:;<=>?@[\]^_`{|}~])/.test(
//       value
//     ),
//   {
//     message: validation.password.mustContain,
//   }
// );

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
    .regex(
      /^\+7\d{10}$|^\+375\d{9}$|^\+7[()\s-]*\d{3}[()\s-]*\d{3}[()\s-]*\d{2}[()\s-]*\d{2}$|^\+375[()\s-]*\d{2}[()\s-]*\d{3}[()\s-]*\d{2}[()\s-]*\d{2}$/,
      validation.phone
    );
