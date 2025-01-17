import React from "react";
import s from "./PaymentMethod.module.scss";
import {
  CashIcon,
  CreditCardIcon,
  IdramIcon,
  PosIcon,
  RhombIcon,
  TransferIcon,
} from "@/assets/icons";
import { Typography } from "@/components/ui/typography";

export const PaymentMethod = () => {
  return (
    <div className={s.payment}>
      <div className={s.title}>
        <div className={s.numCard}>
          <Typography variant="h3" as="h3">
            2
          </Typography>
          <RhombIcon />
        </div>
        <Typography variant="h3" as="h3">
          Способ оплаты
        </Typography>
      </div>
      <div className={s.cardsContainer}>
        <div className={s.card}>
          <CreditCardIcon />
          <Typography>Оплатить картой</Typography>
        </div>
        <div className={s.card}>
          <IdramIcon width={126} height={38} />
          <Typography>Оплатить Идрамом</Typography>
        </div>
        <div className={s.card}>
          <CashIcon />
          <Typography>Оплатить наличными</Typography>
        </div>
        <div className={s.card}>
          <TransferIcon />
          <Typography>Банковским переводом</Typography>
        </div>
        <div className={s.card}>
          <PosIcon />
          <Typography>С картой на месте</Typography>
        </div>
      </div>
    </div>
  );
};
