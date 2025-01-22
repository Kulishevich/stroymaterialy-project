import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { useForm } from "react-hook-form";
import { loginSchemeCreator } from "../model/login-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/api/auth/auth.api";
import { LoginArgs } from "@/api/auth/auth.types";
import s from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [login] = useLoginMutation();

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<LoginArgs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: zodResolver(loginSchemeCreator()),
  });

  const formHandler = handleSubmit(async (data) => {
    console.log(data);
    try {
      await login(data).unwrap();
      reset();
    } catch (err: unknown) {
      console.log(err);
    }
  });

  return (
    <form onSubmit={formHandler}>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <ControlledTextField control={control} name={"email"} />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Пароль</Typography>
          <ControlledTextField
            control={control}
            name={"password"}
            variant={"password"}
          />
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
      <Button
        fullWidth={true}
        className={s.submitButton}
        disabled={!isValid}
        type={"submit"}
      >
        Войти
      </Button>
    </form>
  );
};
