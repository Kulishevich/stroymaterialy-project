import React from "react";
import s from "./PrivacyPolicy.module.scss";
import { Typography } from "@/shared/ui/typography";
import { useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
  const t = useTranslations("delivery_and_payment.privacy_policy");

  return (
    <div className={s.container}>
      <Typography>{t("p1")}</Typography>
      <Typography>{t("p2")}</Typography>

      <Typography variant="h3" as={"h3"}>
        {t("h1")}
      </Typography>
      <Typography>{t("p3")}</Typography>

      <Typography variant="h3" as={"h3"}>
        {t("h2")}
      </Typography>
      <Typography>{t("p4")}</Typography>

      <Typography variant="h3" as={"h3"}>
        {t("h3")}
      </Typography>
      <Typography>{t("p5")}</Typography>

      <Typography variant="h3" as={"h3"}>
        {t("h4")}
      </Typography>
      <Typography>{t("p6")}</Typography>

      <Typography variant="h3" as={"h3"}>
        {t("h5")}
      </Typography>
      <Typography>{t("p7")}</Typography>
    </div>
  );
};
