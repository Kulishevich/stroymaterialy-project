import { nameScheme, phoneScheme } from "@/shared/lib/validation";
import { z } from "zod";

export const callbackSchemeCreator = () => {
  return z.object({
    name: nameScheme(),
    phone: phoneScheme(),
    agreement: z
      .boolean()
      .default(false)
      .refine((value) => value === true, { message: "Необходимо согласие" }),
  });
};
