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
import { Control } from "react-hook-form";
import { PaymentFormValues } from "../payment-page";
import { PaymentMethodsType } from "@/api/orders/orders.types";
import { useTranslations } from "next-intl";

const icons = [
  {
    title: <CreditCardIcon />,
  },
  {
    title: <IdramIcon width={126} height={38} />,
  },
  {
    title: <CashIcon />,
  },
  {
    title: <TransferIcon />,
  },
  {
    title: <PosIcon />,
  },
];

type PaymentMethodProps = {
  control: Control<PaymentFormValues>;
  paymentMethod: PaymentMethodsType[];
};

export const PaymentMethod = ({
  control,
  paymentMethod,
}: PaymentMethodProps) => {
  const t = useTranslations("payment.payment_method");

  const radioOptions = paymentMethod?.map((option, index) => {
    return {
      id: option.slug,
      value: option.name,
      title: icons[index].title,
      content: <Typography>{option.name}</Typography>,
    };
  });
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
          {t("title")}
        </Typography>
      </div>
      {!!radioOptions && (
        <div className={s.cardsContainer}>
          <ControlledRadioCards
            options={radioOptions}
            control={control}
            name="paymentMethod"
          />
        </div>
      )}
    </div>
  );
};
