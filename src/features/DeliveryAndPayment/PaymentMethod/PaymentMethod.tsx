import React from "react";
import s from "./PaymentMethod.module.scss";
import { Typography } from "@/components/ui/typography";
import { IdramIcon, MasterCardIcon, VisaIcon } from "@/assets/icons";

export const PaymentMethod = () => {
  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Способы оплаты
      </Typography>
      <Typography variant="body_1">
        Оплата банковской картой возможна через системы электронных платежей.
        Номер карты должен иметь от 15 до 19 символов.
      </Typography>
      <Typography>
        Мы принимаем платежи с сайта по следующим банковским картам:
      </Typography>
      <div className={s.icons}>
        <MasterCardIcon />
        <VisaIcon />
        <IdramIcon />
      </div>
    </div>
  );
};
