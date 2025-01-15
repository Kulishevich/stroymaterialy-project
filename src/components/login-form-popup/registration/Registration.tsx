import React from "react";
import s from "./Registration.module.scss";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";

export const Registration = () => {
  return (
    <div className={s.container}>
      <Button variant={"secondary"} fullWidth={true}>
        Стать партнером
      </Button>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <TextField />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Фамилия</Typography>
          <TextField />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <TextField placeholder="(+374) 12 34 56 78" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <TextField />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Пароль</Typography>
          <TextField />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Подтвердить пароль</Typography>
          <TextField />
        </div>
      </div>
      <Button fullWidth={true}>Зарегистрироваться</Button>
    </div>
  );
};
