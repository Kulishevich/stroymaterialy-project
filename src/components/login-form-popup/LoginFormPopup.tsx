import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./LoginFormPopup.module.scss";
import { Typography } from "../ui/typography";
import clsx from "clsx";
import { LoginForm } from "./login-form/LoginForm";
import { Registration } from "./registration";
import { Button } from "../ui/button";
import { CloseIcon } from "@/assets/icons";

const navItems = [
  {
    id: "1",
    value: <LoginForm />,
    title: "Вход",
  },
  {
    id: "2",
    value: <Registration />,
    title: "Регистрация",
  },
];

type LoginFormPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginFormPopup = ({ isOpen, setIsOpen }: LoginFormPopupProps) => {
  const [activeTag, setActiveTag] = useState(navItems[0].id);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <div className={s.nav}>
          {navItems.map((item) => (
            <Typography
              as="button"
              variant="h3"
              onClick={() => setActiveTag(item.id)}
              key={item.id}
              className={clsx(activeTag === item.id && s.active)}
            >
              {item.title}
            </Typography>
          ))}
        </div>
        {navItems.find((elem) => elem.id === activeTag)?.value}
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
