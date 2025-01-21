import { z } from "zod";

export const callbackSchemeCreator = () => {
  return z.object({
    name: z.string().trim().min(1, { message: "Поле обязательно" }),
    phone: z
      .string()
      .trim()
      .min(1, { message: "Поле обязательно" })
      .regex(
        /^\+7\d{10}$|^\+375\d{9}$|^\+7[()\s-]*\d{3}[()\s-]*\d{3}[()\s-]*\d{2}[()\s-]*\d{2}$|^\+375[()\s-]*\d{2}[()\s-]*\d{3}[()\s-]*\d{2}[()\s-]*\d{2}$/,
        "Неверный формат номера телефона"
      ),
    agreement: z
      .boolean()
      .default(false)
      .refine((value) => value === true, { message: "Необходимо согласие" }),
  });
};
