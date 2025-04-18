import React from "react";
import s from "./PaymentMethod.module.scss";
import { Typography } from "@/shared/ui/typography";
import {
  BePaidIcon,
  MasterCardIcon,
  VisaIcon,
  VisaSecureIcon,
} from "@/shared/assets/icons";
import { useTranslations } from "next-intl";

export const PaymentMethod = () => {
  const t = useTranslations("delivery_and_payment.payment_method");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <Typography variant="body_1">
        {t("info")}
        <br />
        {t("description")}
      </Typography>
      <div className={s.icons}>
        <MasterCardIcon />
        <VisaIcon />
        <VisaSecureIcon />
        <BePaidIcon />
      </div>
    </div>
  );
};
