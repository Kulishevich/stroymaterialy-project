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

export const signUpSchemeCreator = () => {
  return z
    .object({
      name: nameScheme(),
      surname: surnameScheme(),
      phone: phoneScheme(),
      email: emailScheme(),
      password: passwordScheme(),
      passwordConfirmation: confirmPasswordScheme(),
    })
    .refine((val) => val.password === val.passwordConfirmation, {
      message: validation.passwordsMatch,
      path: ["passwordConfirmation"],
    });
};
