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
    paymentMethod: z.string().nonempty("Выберите способ оплаты"), // Просто строка, но обязательное поле
    address: z.string().nonempty("Адрес обязателен"), // Обязательное поле
    orderType: z.string().nonempty("Выберите тип заказа"), // Просто строка
    extraOptions: z.string().optional(), // Допускаем пустое или отсутствующее значение
    payerType: z.string().nonempty("Выберите тип плательщика"),
  });
};
