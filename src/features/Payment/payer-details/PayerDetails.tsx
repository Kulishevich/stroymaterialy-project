import React from "react";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import s from "./PayerDetails.module.scss";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { Control } from "react-hook-form";
import { PaymentFormValues } from "../payment-page";
import { useTranslations } from "next-intl";

type PayerDetailsProps = {
  control: Control<PaymentFormValues>;
  payerType: {
    name: string;
    id: string;
  }[];
  payerTypeField: string;
};

export const PayerDetails = ({
  control,
  payerType,
  payerTypeField,
}: PayerDetailsProps) => {
  const t = useTranslations("payment.payer_details");

  return (
    <div className={s.payment}>
      <div className={s.title}>
        <div className={s.numCard}>
          <Typography variant="h3" as="h3">
            1
          </Typography>
          <RhombIcon />
        </div>
        <Typography variant="h3" as="h3">
          {t("title")}
        </Typography>
      </div>
      <div className={s.inputsContainer}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("payer_type")}</Typography>
          <ControlledSelect
            control={control}
            name="payerType"
            options={payerType}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("first_name")}</Typography>
          <ControlledTextField
            control={control}
            name="firstName"
            className={s.input}
            placeholder={t("first_name")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("last_name")}</Typography>
          <ControlledTextField
            control={control}
            name="lastName"
            className={s.input}
            placeholder={t("last_name")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("email")}</Typography>
          <ControlledTextField
            control={control}
            name="email"
            className={s.input}
            placeholder={t("email")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("phone")}</Typography>
          <ControlledTextField
            control={control}
            name="phone"
            className={s.input}
            placeholder="(+374) 12 34 56 78"
          />
        </div>
        {payerTypeField === "entity" && (
          <div className={s.inputContainer}>
            <Typography variant="body_5">{t("tin")}</Typography>
            <ControlledTextField
              control={control}
              name="tin"
              className={s.input}
              placeholder={t("tin")}
            />
          </div>
        )}
      </div>
    </div>
  );
};
