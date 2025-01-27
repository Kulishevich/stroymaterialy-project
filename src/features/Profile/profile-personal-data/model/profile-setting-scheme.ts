import {
  emailScheme,
  nameScheme,
  phoneScheme,
  surnameScheme,
} from "@/shared/lib/validation";
import { z } from "zod";

export const profileSettingScheme = () => {
  return z.object({
    name: nameScheme(),
    surname: surnameScheme(),
    phone: phoneScheme(),
    email: emailScheme(),
  });
};
