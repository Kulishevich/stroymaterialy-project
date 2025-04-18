import React from "react";
import { Button } from "../../shared/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./ConfirmModal.module.scss";
import { CloseIcon } from "@/shared/assets/icons";
import { Typography } from "../../shared/ui/typography";

type ConfirmModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  title: string;
};

export const ConfirmModal = ({
  isOpen,
  setIsOpen,
  handleSubmit,
  title,
}: ConfirmModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3">{title}</Typography>
        <div className={s.buttonContainer}>
          <Button onClick={() => setIsOpen(false)}>Нет</Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Да
          </Button>
        </div>
        <Button
          variant={"only_icon"}
          className={s.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};
