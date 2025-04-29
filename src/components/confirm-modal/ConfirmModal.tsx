import React from "react";
import { Button } from "../../shared/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./ConfirmModal.module.scss";
import { CloseIcon } from "@/shared/assets/icons";
import { Typography } from "../../shared/ui/typography";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("confirm_modal");

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3">{title}</Typography>
        <div className={s.buttonContainer}>
          <Button onClick={() => setIsOpen(false)}>{t("no")}</Button>
          <Button variant="secondary" onClick={handleSubmit}>
            {t("yes")}
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
