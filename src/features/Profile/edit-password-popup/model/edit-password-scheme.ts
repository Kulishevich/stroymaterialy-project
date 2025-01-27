import { confirmPasswordScheme, passwordScheme } from "@/shared/lib/validation";
import { validation } from "@/shared/lib/validation.errors";
import { z } from "zod";

export const editPasswordScheme = () => {
  return z
    .object({
      password: passwordScheme(),
      newPassword: passwordScheme(),
      newPasswordConfirmation: confirmPasswordScheme(),
    })
    .refine((val) => val.newPassword === val.newPasswordConfirmation, {
      message: validation.passwordsMatch,
      path: ["passwordConfirmation"],
    });
};
