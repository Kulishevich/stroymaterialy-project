import { emailScheme, passwordScheme } from "@/shared/lib/validation";
import { z } from "zod";

export const loginSchemeCreator = () => {
  return z.object({
    email: emailScheme(),
    password: passwordScheme(),
  });
};
