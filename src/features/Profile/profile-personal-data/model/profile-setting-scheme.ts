import {
  emailScheme,
  nameScheme,
  phoneScheme,
  surnameScheme,
} from "@/shared/validation/validation";
import { z } from "zod";

export const profileSettingScheme = () => {
  return z.object({
    name: nameScheme(),
    surname: surnameScheme(),
    phone: phoneScheme(),
    email: emailScheme(),
  });
};
