import React from "react";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import s from "./PayerDetails.module.scss";
import { ControlledSelect } from "@/components/ui/controlled-select";

type PayerDetailsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
};

const payerType = [
  {
    name: "Физическое лицо",
    id: "individual",
  },
  {
    name: "Юридическое лицо",
    id: "entity",
  },
];

export const PayerDetails = ({ control }: PayerDetailsProps) => {
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
          Данные плательщика
        </Typography>
      </div>
      <div className={s.inputsContainer}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Тип плательщика</Typography>
          <ControlledSelect
            control={control}
            name="payerType"
            placeHolder="Физическое лицо"
            options={payerType}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <ControlledTextField
            control={control}
            name="firstName"
            className={s.input}
            placeholder="Имя"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Фамилия</Typography>
          <ControlledTextField
            control={control}
            name="lastName"
            className={s.input}
            placeholder="Фамилия"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Электронный адрес</Typography>
          <ControlledTextField
            control={control}
            name="email"
            className={s.input}
            placeholder="Электронный адрес"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <ControlledTextField
            control={control}
            name="phone"
            className={s.input}
            placeholder="(+374) 12 34 56 78"
          />
        </div>
      </div>
    </div>
  );
};
