import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Typography, Variant } from "../ui/typography";
import { Button } from "../ui/button";
import { CloseIcon } from "@/assets/icons";
import { ControlledTextField } from "../ui/controlled-textfiled";
import { ControlledCheckbox } from "../ui/controlled-checkbox";
import { callbackSchemeCreator } from "./model/callback-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import s from "./PopupCallback.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

type PopupCallbackProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupCallback = ({
  isOpen = true,
  setIsOpen,
}: PopupCallbackProps) => {
  const isMobile = useIsMobile("tablet");
  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      agreement: false,
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(callbackSchemeCreator()),
  });

  const handleCloseModal = () => {
    setIsOpen((prev) => !prev);
    reset();
  };

  const handlePost = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleCloseModal}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        {!isMobile && (
          <Image
            src="/images/popup-callback.png"
            alt="image"
            width={502}
            height={502}
            className={s.image}
          />
        )}
        <Button
          className={s.closeIcon}
          onClick={() => setIsOpen(false)}
          variant="only_icon"
        >
          <CloseIcon />
        </Button>
        <div className={s.container}>
          <Typography variant="h2" as="h2">
            Обратный звонок
          </Typography>
          <Typography variant="body_3">
            Для связи заполните форму обратной связи, и наш специалист позвонит
            вам в ближайшее время.
          </Typography>
          <form className={s.form}>
            <div className={s.inputContainer}>
              <Typography variant="h4" isRequired={true}>
                Ваше имя
              </Typography>
              <ControlledTextField
                className={s.textfield}
                placeholder="Имя"
                control={control}
                name="name"
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="h4" isRequired={true}>
                Ваш телефон
              </Typography>
              <ControlledTextField
                className={s.textfield}
                placeholder="Телефон"
                control={control}
                name="phone"
              />
            </div>
          </form>
          <div className={s.checkboxContainer}>
            <ControlledCheckbox
              control={control}
              name="agreement"
              label="Согласие на обработку персональных данных"
              labelText={Variant.body_6}
              className={s.checkbox}
            />
          </div>
          <Button onClick={handlePost} disabled={!isValid} fullWidth={isMobile}>
            Отправить
          </Button>
        </div>
        {isMobile && (
          <Image
            src="/images/popup-callback.png"
            alt="image"
            width={190}
            height={190}
            className={s.imageMobile}
          />
        )}
      </Dialog.Content>
    </Dialog.Root>
  );
};
