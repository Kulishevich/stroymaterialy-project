import {
  emailScheme,
  nameScheme,
  phoneScheme,
  surnameScheme,
} from "@/shared/validation/validation";
import { z } from "zod";

export const paymentSchemeCreator = () => {
  return z.object({
    firstName: nameScheme(),
    lastName: surnameScheme(),
    email: emailScheme(),
    phone: phoneScheme(),
    tin: z.string(),
    paymentMethod: z.string().nonempty("Выберите способ оплаты"),
    addressId: z.string().nonempty("Адрес обязателен"),
    orderType: z.string().nonempty("Выберите тип заказа"),
    payerType: z.string().nonempty("Выберите тип плательщика"),
    deliveryTime: z.string().nonempty("Выберите время доставки"),
    deliveryData: z.string().nonempty("Выберите дату доставки"),
    extraOptions: z.array(z.string()).optional().default([]),
  });
};
