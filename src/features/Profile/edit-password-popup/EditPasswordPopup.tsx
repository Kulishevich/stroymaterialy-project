import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { useChangePasswordMutation } from "@/api/user/user.api";
import { useForm, useWatch } from "react-hook-form";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { editPasswordScheme } from "./model/edit-password-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import s from "./EditPasswordPopup.module.scss";
import { validation } from "@/shared/validation/validation.errors";
import { showToast } from "@/components/ui/toast";

type EditPasswordPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditPasswordPopup = ({
  isOpen,
  setIsOpen,
}: EditPasswordPopupProps) => {
  const [changePassword] = useChangePasswordMutation();

  const { control, handleSubmit, reset, setError } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(editPasswordScheme()),
  });

  const password = useWatch({ control, name: "newPassword" });
  const confirmPassword = useWatch({
    control,
    name: "newPasswordConfirmation",
  });

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("newPasswordConfirmation", {
        message: validation.passwordsMatch,
      });
    } else {
      setError("newPasswordConfirmation", { message: "" });
    }
  }, [password, confirmPassword, setError]);

  const formHandler = handleSubmit(async (data) => {
    try {
      await changePassword(data).unwrap();
      showToast({ message: "Пароль сменён успешно", variant: "success" });
      reset();
      setIsOpen(false);
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: "Ошибка в смене пароля", variant: "error" });
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <form onSubmit={formHandler}>
          <Typography variant="h3" as="h3">
            Редактировать пароль
          </Typography>
          <div className={s.inputsContainer}>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Текущий пароль</Typography>
              <ControlledTextField
                control={control}
                name="password"
                variant="password"
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Новый пароль</Typography>
              <ControlledTextField
                control={control}
                name="newPassword"
                variant="password"
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Подтвердить новый пароль</Typography>
              <ControlledTextField
                control={control}
                name="newPasswordConfirmation"
                variant="password"
              />
            </div>
          </div>
          <Button fullWidth={true} className={s.buttonSubmit} type="submit">
            Сохранить
          </Button>
        </form>
        <Button
          variant={"icon"}
          className={s.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};
