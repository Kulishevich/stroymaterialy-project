import React from "react";
import s from "./AdditionalServices.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { Radio } from "@/components/ui/radio";

const serviceOptions = [
  {
    id: "1",
    value: "unloading",
    content: "Разгрузка",
  },
  {
    id: "2",
    value: "climbing_to_the_floor",
    content: "Подъем на этаж",
  },
];

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
      <Radio options={serviceOptions} className={s.radioService} />
    </div>
  );
};
