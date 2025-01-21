import React from "react";
import s from "./AdditionalServices.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { Radio } from "@/components/ui/radio";
import { useGetExtraOptionsQuery } from "@/api/orders/orders.api";

export const AdditionalServices = () => {
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
      {extraOptions && (
        <Radio options={extraOptions.data} className={s.radioService} />
      )}
    </div>
  );
};
