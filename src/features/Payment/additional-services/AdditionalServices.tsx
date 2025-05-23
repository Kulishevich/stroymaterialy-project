import React from "react";
import { Typography, Variant } from "@/shared/ui/typography";
import { RhombIcon } from "@/shared/assets/icons";
import { Checkbox } from "@/shared/ui/checkbox";
import { Control, Controller } from "react-hook-form";
import { PaymentFormValues } from "../payment-page";
import s from "./AdditionalServices.module.scss";
import { useTranslations } from "next-intl";
import { ExtraOptionsResponse } from "@/api/orders/orders.types";

type AdditionalServicesProps = {
  control: Control<PaymentFormValues>;
  extraOptions: { data: ExtraOptionsResponse[] };
};

export const AdditionalServices = ({
  control,
  extraOptions,
}: AdditionalServicesProps) => {
  const t = useTranslations("payment.additional_services");

  return (
    <div className={s.payment}>
      <div className={s.title}>
        <div className={s.numCard}>
          <Typography variant="h3" as="h3">
            4
          </Typography>
          <RhombIcon />
        </div>
        <Typography variant="h3" as="h3">
          {t("title")}
        </Typography>
      </div>
      <Typography variant="body_2">{t("description")}</Typography>

      {!!extraOptions?.data && (
        <div className={s.options}>
          <Controller
            control={control}
            name="extraOptions"
            render={({ field: { value, onChange } }) => (
              <>
                {extraOptions.data.map((option) => {
                  const isChecked = value.some((item) => item === option.id);

                  return (
                    <Checkbox
                      key={option.id}
                      variant="secondary"
                      label={option.name}
                      labelText={Variant.body_1}
                      checked={isChecked}
                      onCheckedChange={(checked) => {
                        onChange(
                          checked
                            ? [...value, option.id]
                            : value.filter((item) => item !== option.id)
                        );
                      }}
                    />
                  );
                })}
              </>
            )}
          />
        </div>
      )}
    </div>
  );
};
