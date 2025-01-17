import React from "react";
import s from "./PaymentPage.module.scss";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PayerDetails } from "../payer-details";
import { PaymentMethod } from "../payment-method";
import { PurchaseMethod } from "../purchase-method";
import { AdditionalServices } from "../additional-services";

export const PaymentPage = () => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Оплата
      </Typography>

      <div className={s.content}>
        <div className={s.form}>
          <PayerDetails />
          <PaymentMethod />
          <PurchaseMethod />
          <AdditionalServices />
        </div>
        <div className={s.price}>
          <div className={s.total}>
            <Typography variant="body_3">Цена</Typography>
            <Typography variant="body_3">1 500,00 AMD</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="body_3">Доставка</Typography>
            <Typography variant="body_3">300,00 AMD</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="h4">Сумма</Typography>
            <Typography variant="h4">1 800,00 AMD</Typography>
          </div>
          <Button fullWidth={true}>Продолжить</Button>
        </div>
      </div>
    </div>
  );
};
