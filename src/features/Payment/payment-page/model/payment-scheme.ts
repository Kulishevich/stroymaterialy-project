import {
  emailScheme,
  nameScheme,
  phoneScheme,
  surnameScheme,
} from "@/shared/validation/validation";
import { z } from "zod";

export const paymentSchemeCreator = (user: boolean) => {
  return z
    .object({
      firstName: nameScheme(),
      lastName: surnameScheme(),
      email: emailScheme(),
      phone: phoneScheme(),
      tin: z.string(),
      address: z.string().optional(),
      additional: z.string(),
      regionId: z.string(),
      paymentMethod: z.string().nonempty("Выберите способ оплаты"),
      addressId: z.string().optional(),
      orderType: z.string().nonempty("Выберите тип заказа"),
      payerType: z.string().nonempty("Выберите тип плательщика"),
      deliveryTime: z.string().nonempty("Выберите время доставки"),
      deliveryData: z.string().nonempty("Выберите дату доставки"),
      extraOptions: z.array(z.string()).optional().default([]),
    })
    .refine(
      (data) => {
        if (user && !data.addressId) {
          return false;
        }
        return true;
      },
      {
        message: "Адрес обязателен",
        path: ["addressId"],
      }
    )
    .refine(
      (data) => {
        if (!user && !data.address) {
          return false;
        }
        return true;
      },
      {
        message: "Адрес обязателен",
        path: ["addressId"],
      }
    );
};
