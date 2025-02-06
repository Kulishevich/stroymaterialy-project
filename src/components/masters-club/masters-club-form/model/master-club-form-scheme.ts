import {
  confirmPasswordScheme,
  emailScheme,
  nameScheme,
  passwordScheme,
  phoneScheme,
  surnameScheme,
} from "@/shared/validation/validation";
import { validation } from "@/shared/validation/validation.errors";
import { z } from "zod";

export const masterClubFormScheme = (isAuthenticated: boolean) => {
  return z
    .object({
      firstName: nameScheme(),
      lastName: surnameScheme(),
      email: emailScheme(),
      phone: phoneScheme(),
      password: isAuthenticated
        ? passwordScheme().optional()
        : passwordScheme(),
      passwordConfirmation: isAuthenticated
        ? confirmPasswordScheme().optional()
        : confirmPasswordScheme(),
      profession: z.string(),
      sphere: z.string(),
      about: z.string().max(300, validation.maxLength).optional(),
      tin: z.string().optional(),
      company: z.string().optional(),
      confirmation: z.boolean().refine((value) => value === true, {
        message: validation.agreeToTerms,
      }),
      memberType: z.string(),
    })
    .refine(
      (val) => {
        if (!isAuthenticated) {
          return val.password === val.passwordConfirmation;
        }
        return true;
      },
      {
        message: validation.passwordsMatch,
        path: ["passwordConfirmation"],
      }
    );
};
