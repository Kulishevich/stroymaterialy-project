import React from "react";
import s from "./LiftingConditions.module.scss";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export const LiftingConditions = () => {
  const t = useTranslations("delivery_and_payment.lifting_conditions");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <Typography variant="body_3">{t("description")}</Typography>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("info_title")}
        </Typography>
        <Typography variant="body_2">{t("info_description")}</Typography>
        <ul>
          {t.raw("info_list").map((item: string, index: number) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("cost_title")}
        </Typography>
        <Typography variant="body_2">{t("cost_description")}</Typography>
        <ul>
          {t.raw("cost_list").map((item: string, index: number) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("safety_title")}
        </Typography>
        <Typography variant="body_2">{t("safety_description")}</Typography>
        <ul>
          {t.raw("safety_list").map((item: string, index: number) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="body_2">{t("guarantee_title")}</Typography>
        <ul>
          {t.raw("guarantee_list").map((item: string, index: number) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("tariff_title")}
        </Typography>
        <Typography variant="body_2">{t("tariff_manual")}</Typography>
        <ul>
          {t.raw("tariff_manual_list").map((item: string, index: number) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
        <Typography variant="body_2">{t("tariff_elevator")}</Typography>
        <ul>
          {t.raw("tariff_elevator_list").map((item: string, index: number) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
      </div>
    </div>
  );
};
