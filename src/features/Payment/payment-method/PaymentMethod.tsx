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
import s from "./PaymentMethod.module.scss";
import { ControlledRadioCards } from "@/components/ui/controlled-radio-cards/ControlledRadioCards";

const radioOptions = [
  {
    id: "1",
    value: "Оплатить картой",
    title: <CreditCardIcon />,
    content: <Typography>Оплатить картой</Typography>,
  },
  {
    id: "2",
    value: "Оплатить Идрамом",
    title: <IdramIcon width={126} height={38} />,
    content: <Typography>Оплатить Идрамом</Typography>,
  },
  {
    id: "3",
    value: "Оплатить наличными",
    title: <CashIcon />,
    content: <Typography>Оплатить наличными</Typography>,
  },
  {
    id: "4",
    value: "Банковским переводом",
    title: <TransferIcon />,
    content: <Typography>Банковским переводом</Typography>,
  },
  {
    id: "5",
    value: "С картой на месте",
    title: <PosIcon />,
    content: <Typography>С картой на месте</Typography>,
  },
];

type PaymentMethodProps = {
  control: any;
};

export const PaymentMethod = ({ control }: PaymentMethodProps) => {
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
        <ControlledRadioCards
          options={radioOptions}
          control={control}
          name="paymentMethod"
        />
      </div>
    </div>
  );
};
