import {
  confirmPasswordScheme,
  passwordScheme,
} from "@/shared/validation/validation";
import { validation } from "@/shared/validation/validation.errors";
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
