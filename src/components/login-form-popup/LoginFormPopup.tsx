import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Typography } from "../../shared/ui/typography";
import clsx from "clsx";
import { LoginForm } from "./login-form/LoginForm";
import { Registration } from "./registration";
import { Button } from "../../shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { TextField } from "../../shared/ui/text-field";
import s from "./LoginFormPopup.module.scss";
import { useTranslations } from "next-intl";

type LoginFormPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginFormPopup = ({ isOpen, setIsOpen }: LoginFormPopupProps) => {
  const [activeTag, setActiveTag] = useState("1");
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  const t = useTranslations("autorization");

  const navItems = [
    {
      id: "1",
      value: (
        <LoginForm
          setIsPasswordRecovery={setIsPasswordRecovery}
          setIsOpen={setIsOpen}
        />
      ),
      title: t("login"),
    },
    {
      id: "2",
      value: <Registration setIsOpen={setIsOpen} />,
      title: t("registration"),
    },
  ];

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        {!isPasswordRecovery ? (
          <>
            <div className={s.nav}>
              {navItems.map((item) => {
                return (
                  item.title && (
                    <Typography
                      as="button"
                      variant="h3"
                      onClick={() => setActiveTag(item.id)}
                      key={item.id}
                      className={clsx(activeTag === item.id && s.active)}
                    >
                      {item.title}
                    </Typography>
                  )
                );
              })}
            </div>
            {navItems.find((elem) => elem.id === activeTag)?.value}
          </>
        ) : (
          <div className={s.passwordRecovery}>
            <Typography variant="h3" as="h3">
              {t("password_recovery.title")}
            </Typography>
            <Typography variant="body_5">
              {t("password_recovery.description")}
            </Typography>
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("password_recovery.email_label")}
              </Typography>
              <TextField />
            </div>
            <Button fullWidth={true} className={s.button}>
              {t("password_recovery.recover_button")}
            </Button>
            <Typography
              variant="button"
              as="button"
              className={s.link}
              onClick={() => setIsPasswordRecovery(false)}
            >
              {t("password_recovery.back_to_login")}
            </Typography>
          </div>
        )}
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
