import React, { useState } from "react";
import s from "./ProfilePersonalData.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { EditPasswordPopup } from "../edit-password-popup";

export const ProfilePersonalData = () => {
  const [isEditPassword, setIsEditPassword] = useState<boolean>(false);

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Персональные данные
      </Typography>
      <div className={s.inputsContainer}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <TextField placeholder="Имя" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Фамилия</Typography>
          <TextField placeholder="Фамилия" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <TextField placeholder="(+374) 12 34 56 78" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <TextField placeholder="Эл. адрес" />
        </div>
      </div>
      <Typography variant="button" as="button" className={s.button}>
        Редактировать
      </Typography>
      <div className={s.inputContainer}>
        <Typography variant="body_5">Пароль</Typography>
        <TextField placeholder="Пароль" variant="password" />
      </div>
      <Typography
        variant="button"
        as="button"
        className={s.secondButton}
        onClick={() => setIsEditPassword(true)}
      >
        Редактировать
      </Typography>
      <Button variant="secondary" className={s.deleteButton}>
        Удалить страницу
      </Button>
      <EditPasswordPopup
        isOpen={isEditPassword}
        setIsOpen={setIsEditPassword}
      />
    </div>
  );
};
