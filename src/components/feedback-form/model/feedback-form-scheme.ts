import { nameScheme, phoneScheme } from "@/shared/validation/validation";
import { z } from "zod";

export const feedbackFormSchemeCreator = () => {
  return z.object({
    name: nameScheme(),
    phone: phoneScheme(),
    agreement: z
      .boolean()
      .default(false)
      .refine((value) => value === true, {
        message: "Пожалуйста, согласитесь с правилами и условиями",
      }),
  });
};
