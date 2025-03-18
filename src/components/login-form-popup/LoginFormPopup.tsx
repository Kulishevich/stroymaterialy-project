import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Typography } from "../ui/typography";
import clsx from "clsx";
import { LoginForm } from "./login-form/LoginForm";
import { Registration } from "./registration";
import { Button } from "../ui/button";
import { CloseIcon } from "@/assets/icons";
import { TextField } from "../ui/text-field";
import s from "./LoginFormPopup.module.scss";

type LoginFormPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginFormPopup = ({ isOpen, setIsOpen }: LoginFormPopupProps) => {
  const [activeTag, setActiveTag] = useState("1");
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);

  const navItems = [
    {
      id: "1",
      value: (
        <LoginForm
          setIsPasswordRecovery={setIsPasswordRecovery}
          setIsOpen={setIsOpen}
        />
      ),
      title: "Вход",
    },
    {
      id: "2",
      value: <Registration setIsOpen={setIsOpen} />,
      title: "Регистрация",
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
              Восстановить пароль
            </Typography>
            <Typography variant="body_5">
              Введите ваш адрес электронной почты, и мы пошлем вам ссылку для
              сброса пароля
            </Typography>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Эл. адрес</Typography>
              <TextField />
            </div>
            <Button fullWidth={true} className={s.button}>
              Восстановить
            </Button>
            <Typography
              variant="button"
              as="button"
              className={s.link}
              onClick={() => setIsPasswordRecovery(false)}
            >
              Вернуться во вход
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
