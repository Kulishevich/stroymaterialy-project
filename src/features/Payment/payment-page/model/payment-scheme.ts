import {
  emailScheme,
  nameScheme,
  phoneScheme,
  surnameScheme,
} from "@/shared/lib/validation";
import { z } from "zod";

export const paymentSchemeCreator = () => {
  return z.object({
    firstName: nameScheme(),
    lastName: surnameScheme(),
    email: emailScheme(),
    phone: phoneScheme(),
    paymentMethod: z.string().nonempty("Выберите способ оплаты"),
    addressId: z.number().int().positive("Адрес обязателен"),
    orderType: z.string().nonempty("Выберите тип заказа"),
    payerType: z.string().nonempty("Выберите тип плательщика"),
    extraOptions: z
      .array(z.string().uuid())
      .optional()
      .default([])
      .transform((arr) => arr.map((id) => ({ extraOptionId: id }))),
  });
};
