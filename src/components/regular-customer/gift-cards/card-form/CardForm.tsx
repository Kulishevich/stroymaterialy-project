import React from "react";
import s from "./CardForm.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const CardForm = () => {
  return (
    <div className={s.container}>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <TextField placeholder="Имя" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <TextField placeholder="(+374) 12 34 56 78" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Сумма (драм)</Typography>
          <TextField placeholder="20000" />
        </div>
        <Button> Отправить</Button>
      </div>
      <Image
        src={"/images/domix-card.png"}
        width={518}
        height={288}
        alt="card"
      />
    </div>
  );
};
