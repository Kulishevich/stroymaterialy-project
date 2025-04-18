import React from "react";
import s from "./ActivateCard.module.scss";
import { Typography } from "@/shared/ui/typography";
import { TextField } from "@/shared/ui/text-field";
import { Button } from "@/shared/ui/button";
import { useTranslations } from "next-intl";

export const ActivateCard = () => {
  const t = useTranslations("regular_customer.gift_card");

  return (
    <div className={s.container}>
      <div className={s.inputContainer}>
        <Typography variant="body_5">Card ID</Typography>
        <TextField placeholder="12345678" />
      </div>
      <Button variant={"secondary"} className={s.button}>
        {t("activate")}
      </Button>
    </div>
  );
};
