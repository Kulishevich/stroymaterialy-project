import React from "react";
import { Typography, Variant } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { useGetExtraOptionsQuery } from "@/api/orders/orders.api";
import { Checkbox } from "@/components/ui/checkbox";
import { Control, Controller } from "react-hook-form";
import { PaymentFormValues } from "../payment-page";
import s from "./AdditionalServices.module.scss";

type AdditionalServicesProps = {
  control: Control<PaymentFormValues>;
};

export const AdditionalServices = ({ control }: AdditionalServicesProps) => {
  const { data: extraOptions, isLoading } = useGetExtraOptionsQuery();
  if (!isLoading) {
    console.log(extraOptions?.data);
  }
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
          Дополнительные услуги
        </Typography>
      </div>
      <Typography variant="body_2">
        Стоимость дополнительных услуг уточнит оператор.
      </Typography>

      {!isLoading && extraOptions?.data && (
        <div className={s.options}>
          <Controller
            control={control}
            name="extraOptions"
            render={({ field: { value, onChange } }) => (
              <>
                {extraOptions.data.map((option) => {
                  const isChecked = value.some(
                    (item) => item.extraOptionId === option.id
                  );

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
                            ? [...value, { extraOptionId: option.id }]
                            : value.filter(
                                (item) => item.extraOptionId !== option.id
                              )
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
