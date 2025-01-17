import React from "react";
import s from "./AdditionalServices.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { Checkbox } from "@/components/ui/checkbox";

export const AdditionalServices = () => {
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
      <Typography variant="body_1">
        <Checkbox />
        Разгрузка
      </Typography>
      <Typography variant="body_1">
        <Checkbox />
        Подъем на этаж
      </Typography>
    </div>
  );
};
