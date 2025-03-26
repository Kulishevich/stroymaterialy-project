import { validation } from "@/shared/validation/validation.errors";
import { z } from "zod";

export const addAddressScheme = () => {
  return z.object({
    regionId: z.string(),
    address: z.string().trim().min(1, { message: validation.requiredField }),
    details: z.string().trim(),
  });
};
