import React from "react";
import s from "./AdditionalServices.module.scss";
import { Typography, Variant } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { useGetExtraOptionsQuery } from "@/api/orders/orders.api";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller } from "react-hook-form";

type AdditionalServicesProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
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
                  const isChecked = value.includes(option.id);

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
                            ? [...value, option.id] // Добавляем id в массив
                            : value.filter((id: string) => id !== option.id) // Убираем id из массива
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
