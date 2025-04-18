import React from "react";
import { RhombIcon } from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import s from "./PaymentMethod.module.scss";
import { ControlledRadioCards } from "@/shared/ui/controlled-radio-cards/ControlledRadioCards";
import { Control } from "react-hook-form";
import { PaymentFormValues } from "../payment-page";
import { PaymentMethodsType } from "@/api/orders/orders.types";
import { useTranslations } from "next-intl";
import Image from "next/image";

type PaymentMethodProps = {
  control: Control<PaymentFormValues>;
  paymentMethod: PaymentMethodsType[];
};

export const PaymentMethod = ({
  control,
  paymentMethod,
}: PaymentMethodProps) => {
  const t = useTranslations("payment.payment_method");

  const radioOptions = paymentMethod?.map((option) => {
    return {
      id: option.slug,
      value: option.name,
      title: (
        <Image src={option.icon} width={50} height={50} alt={option.slug} />
      ),
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
