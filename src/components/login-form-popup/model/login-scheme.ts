import { emailScheme, passwordScheme } from "@/shared/validation/validation";
import { z } from "zod";

export const loginSchemeCreator = () => {
  return z.object({
    email: emailScheme(),
    password: passwordScheme(),
  });
};
