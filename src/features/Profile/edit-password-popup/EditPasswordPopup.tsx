import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import s from "./EditPasswordPopup.module.scss";

type EditPasswordPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditPasswordPopup = ({
  isOpen,
  setIsOpen,
}: EditPasswordPopupProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Редактировать пароль
        </Typography>
        <div className={s.inputsContainer}>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Текущий пароль</Typography>
            <TextField variant="password" />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Новый пароль</Typography>
            <TextField variant="password" />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Подтвердить новый пароль</Typography>
            <TextField variant="password" />
          </div>
        </div>
        <Button fullWidth={true} className={s.buttonSubmit}>
          Сохранить
        </Button>
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
