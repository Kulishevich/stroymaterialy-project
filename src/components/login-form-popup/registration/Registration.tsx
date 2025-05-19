import React, { useEffect } from "react";
import s from "./Registration.module.scss";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { useForm, useWatch } from "react-hook-form";
import { signUpSchemeCreator } from "../model/sign-up-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledTextField } from "@/shared/ui/controlled-textfiled";
import { useSignUpMutation } from "@/api/auth/auth.api";
import { validation } from "@/shared/validation/validation.errors";
import { showToast } from "@/shared/ui/toast";
import { useTranslations } from "next-intl";

export const Registration = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations("autorization.registration_form");
  const [signUp] = useSignUpMutation();

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(signUpSchemeCreator()),
  });

  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "passwordConfirmation" });

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("passwordConfirmation", { message: validation.passwordsMatch });
    } else {
      setError("passwordConfirmation", { message: "" });
    }
  }, [password, confirmPassword, setError]);

  const formHandler = handleSubmit(async (data) => {
    const { name, surname, ...rest } = data;
    const fetchData = { ...rest, fullName: `${name} ${surname}` };

    try {
      const resData = await signUp(fetchData).unwrap();
      reset();
      showToast({
        message: resData.message || t("success_message"),
        variant: "success",
      });
      setIsOpen(false);
    } catch (err: unknown) {
      if (
        err &&
        typeof err === "object" &&
        "data" in err &&
        typeof err.data === "object"
      ) {
        const errorData = err as { data: { message: string } };
        showToast({ message: errorData.data.message, variant: "error" });
      } else {
        showToast({ message: t("error_message"), variant: "error" });
      }
      console.error(err);
    }
  });

  return (
    <form className={s.container} onSubmit={formHandler}>
      <Button variant={"secondary"} fullWidth={true}>
        {t("become_partner")}
      </Button>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("name")}</Typography>
          <ControlledTextField control={control} name={"name"} />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("surname")}</Typography>
          <ControlledTextField control={control} name={"surname"} />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("phone")}</Typography>
          <ControlledTextField
            control={control}
            name={"phone"}
            placeholder={t("phone_placeholder")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("email")}</Typography>
          <ControlledTextField control={control} name={"email"} />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("password")}</Typography>
          <ControlledTextField
            control={control}
            name={"password"}
            variant="password"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("confirm_password")}</Typography>
          <ControlledTextField
            control={control}
            name={"passwordConfirmation"}
            variant="password"
          />
        </div>
      </div>
      <Button fullWidth={true} type={"submit"} disabled={!isValid}>
        {t("submit_button")}
      </Button>
    </form>
  );
};
