import React from "react";
import s from "./CardForm.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const CardForm = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <TextField className={s.input} placeholder="Имя" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <TextField className={s.input} placeholder="(+374) 12 34 56 78" />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Сумма (драм)</Typography>
          <TextField className={s.input} placeholder="20000" />
        </div>
        <Button> Отправить</Button>
      </div>
      <Image
        src={"/images/domix-card.png"}
        width={!isMobile ? 518 : 336}
        height={!isMobile ? 288 : 187}
        alt="card"
      />
    </div>
  );
};
