import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./AddAddressPopup.module.scss";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import { Select } from "@/components/ui/select";

const districtOptions = [
  {
    option: "Эребуни",
    value: "1",
  },
  {
    option: "Эребуни",
    value: "2",
  },
  {
    option: "Эребуни",
    value: "3",
  },
  {
    option: "Эребуни",
    value: "4",
  },
];

type AddAddressPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddAddressPopup = ({
  isOpen,
  setIsOpen,
}: AddAddressPopupProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Добавить адрес
        </Typography>

        <div className={s.inputsContainer}>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Округ</Typography>
            <Select
              options={districtOptions}
              placeHolder={districtOptions[0].option}
            />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Адрес доставки</Typography>
            <TextField />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Детали адреса доставки</Typography>
            <TextField />
          </div>
        </div>

        <Button fullWidth={true} className={s.button}>
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
