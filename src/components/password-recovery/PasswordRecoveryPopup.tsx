import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./PasswordRecoveryPopup.module.scss";
import { Typography } from "../ui/typography";
import { TextField } from "../ui/text-field";
import { Button } from "../ui/button";
import { CloseIcon } from "@/assets/icons";

type PasswordRecoveryPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PasswordRecoveryPopup = ({
  isOpen,
  setIsOpen,
}: PasswordRecoveryPopupProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Восстановить пароль
        </Typography>
        <Typography variant="body_5">
          Введите ваш адрес электронной почты, и мы пошлем вам ссылку для сброса
          пароля
        </Typography>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <TextField />
        </div>
        <Button fullWidth={true} className={s.button}>
          Восстановить
        </Button>
        <Typography variant="button" as="button" className={s.link}>
          Вернуться во вход
        </Typography>
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
