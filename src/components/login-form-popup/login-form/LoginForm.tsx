import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { useForm } from "react-hook-form";
import { loginSchemeCreator } from "../model/login-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/api/auth/auth.api";
import { LoginArgs } from "@/api/auth/auth.types";
import s from "./LoginForm.module.scss";
// import { showToast } from "@/components/ui/toast";

type LoginFormProps = {
  setIsPasswordRecovery: (value: boolean) => void;
};

export const LoginForm = ({ setIsPasswordRecovery }: LoginFormProps) => {
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
      const res = await login(data).unwrap();
      console.log(res);
      reset();
    } catch (err: unknown) {
      // showToast({ message: err.data.message, variant: "error" });
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
        className={s.passwordRecovery}
        onClick={() => setIsPasswordRecovery(true)}
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
