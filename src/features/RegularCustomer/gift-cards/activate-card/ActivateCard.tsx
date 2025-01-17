import React from "react";
import s from "./ActivateCard.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";

export const ActivateCard = () => {
  return (
    <div className={s.container}>
      <div className={s.inputContainer}>
        <Typography variant="body_5">Card ID</Typography>
        <TextField placeholder="12345678" />
      </div>
      <Button variant={"secondary"} className={s.button}>
        Активировать
      </Button>
    </div>
  );
};
