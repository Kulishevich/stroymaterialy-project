import { Typography } from "@/shared/ui/typography";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./ReturnProducts.module.scss";

export const ReturnProducts = () => {
  const t = useTranslations("delivery_and_payment.return_product");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <Typography>{t("paragraphs.p1")}</Typography>
      <ul>
        <Typography variant="body_3" as="li">
          {t("list.l1")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("list.l2")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("list.l3")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("list.l4")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("list.l5")}
        </Typography>
      </ul>
      <Typography>{t("paragraphs.p2")}</Typography>
      <Typography>{t("paragraphs.p3")}</Typography>
      <Typography>{t("paragraphs.p4")}</Typography>
      <Typography>{t("paragraphs.p5")}</Typography>
      <Typography>{t("paragraphs.p6")}</Typography>
      <Typography>{t("paragraphs.p7")}</Typography>
    </div>
  );
};
