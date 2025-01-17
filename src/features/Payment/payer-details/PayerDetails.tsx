import React from "react";
import { TextField } from "@/components/ui/text-field";
import { Typography } from "@/components/ui/typography";
import { Select } from "@/components/ui/select";
import { RhombIcon } from "@/assets/icons";
import s from "./PayerDetails.module.scss";

export const PayerDetails = () => {
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
          Дополнительные услуги
        </Typography>
      </div>
      <div className={s.inputsContainer}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Тип плательщика</Typography>
          <Select placeHolder="Физическое лицо" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <TextField className={s.input} placeholder="Имя" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Фамилия</Typography>
          <TextField className={s.input} placeholder="Фамилия" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Электронный адрес</Typography>
          <TextField className={s.input} placeholder="Электронный адрес" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <TextField className={s.input} placeholder="(+374) 12 34 56 78" />
        </div>
      </div>
    </div>
  );
};
