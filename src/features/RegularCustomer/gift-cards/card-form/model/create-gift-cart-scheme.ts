import { nameScheme, phoneScheme } from "@/shared/lib/validation";
import { z } from "zod";

export const giftCartScheme = () => {
  return z.object({
    fullName: nameScheme(),
    phone: phoneScheme(),
    balance: z
      .string()
      .regex(/^\d+$/, "Баланс должен содержать только цифры")
      .min(1, "Баланс не может быть пустым"),
  });
};
