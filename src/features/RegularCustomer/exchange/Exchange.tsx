import React from "react";
import s from "./Exchange.module.scss";
import { Typography } from "@/shared/ui/typography";
import { useTranslations } from "next-intl";

export const Exchange = () => {
  const t = useTranslations("regular_customer.exchange");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <Typography>
        {t("text.main")} <strong>{t("text.strong")}</strong>
      </Typography>
    </div>
  );
};
