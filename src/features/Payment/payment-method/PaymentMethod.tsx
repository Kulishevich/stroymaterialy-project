import React from "react";
import {
  CashIcon,
  CreditCardIcon,
  IdramIcon,
  PosIcon,
  RhombIcon,
  TransferIcon,
} from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { RadioCards } from "@/components/ui/radio-cards";
import s from "./PaymentMethod.module.scss";

const radioOptions = [
  {
    id: "1",
    value: "card",
    title: <CreditCardIcon />,
    content: <Typography>Оплатить картой</Typography>,
  },
  {
    id: "2",
    value: "idram",
    title: <IdramIcon width={126} height={38} />,
    content: <Typography>Оплатить Идрамом</Typography>,
  },
  {
    id: "3",
    value: "cash",
    title: <CashIcon />,
    content: <Typography>Оплатить наличными</Typography>,
  },
  {
    id: "4",
    value: "bank_transfer",
    title: <TransferIcon />,
    content: <Typography>Банковским переводом</Typography>,
  },
  {
    id: "5",
    value: "card_place",
    title: <PosIcon />,
    content: <Typography>С картой на месте</Typography>,
  },
];

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
        <RadioCards options={radioOptions} />
      </div>
    </div>
  );
};
