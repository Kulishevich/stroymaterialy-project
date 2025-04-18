import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Typography, Variant } from "../../shared/ui/typography";
import { Button } from "../../shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { ControlledTextField } from "../../shared/ui/controlled-textfiled";
import { ControlledCheckbox } from "../../shared/ui/controlled-checkbox";
import { callbackSchemeCreator } from "./model/callback-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import s from "./PopupCallback.module.scss";

type PopupCallbackProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupCallback = ({
  isOpen = true,
  setIsOpen,
}: PopupCallbackProps) => {
  const t = useTranslations("callback_popup");
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
            {t("title")}
          </Typography>
          <Typography variant="body_3">{t("description")}</Typography>
          <form className={s.form}>
            <div className={s.inputContainer}>
              <Typography variant="h4" isRequired={true}>
                {t("name_label")}
              </Typography>
              <ControlledTextField
                className={s.textfield}
                placeholder={t("name_placeholder")}
                control={control}
                name="name"
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="h4" isRequired={true}>
                {t("phone_label")}
              </Typography>
              <ControlledTextField
                className={s.textfield}
                placeholder={t("phone_placeholder")}
                control={control}
                name="phone"
              />
            </div>
          </form>
          <div className={s.checkboxContainer}>
            <ControlledCheckbox
              control={control}
              name="agreement"
              label={t("agreement_text")}
              labelText={Variant.body_6}
              className={s.checkbox}
            />
          </div>
          <Button onClick={handlePost} disabled={!isValid} fullWidth={isMobile}>
            {t("submit_button")}
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
