import React from "react";
import s from "./LoginForm.module.scss";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <div>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <TextField className={s.input} />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <TextField className={s.input} />
        </div>
      </div>
      <Typography
        variant="button"
        as={Link}
        href={"/password-recovery"}
        className={s.passwordRecovery}
      >
        Восстановить пароль
      </Typography>
      <Button fullWidth={true} className={s.submitButton}>
        Войти
      </Button>
    </div>
  );
};
