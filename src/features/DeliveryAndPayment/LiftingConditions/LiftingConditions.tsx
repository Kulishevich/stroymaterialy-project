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
          {Object.values(t.raw("info_list") as Record<string, string>).map(
            (item, index) => (
              <Typography key={index} variant="body_3" as="li">
                {item}
              </Typography>
            )
          )}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("cost_title")}
        </Typography>
        <Typography variant="body_2">{t("cost_description")}</Typography>
        <ul>
          {Object.values(t.raw("cost_list") as Record<string, string>).map(
            (item, index) => (
              <Typography key={index} variant="body_3" as="li">
                {item}
              </Typography>
            )
          )}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("safety_title")}
        </Typography>
        <Typography variant="body_2">{t("safety_description")}</Typography>
        <ul>
          {Object.values(t.raw("safety_list") as Record<string, string>).map(
            (item, index) => (
              <Typography key={index} variant="body_3" as="li">
                {item}
              </Typography>
            )
          )}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="body_2">{t("guarantee_title")}</Typography>
        <ul>
          {Object.values(t.raw("guarantee_list") as Record<string, string>).map(
            (item, index) => (
              <Typography key={index} variant="body_3" as="li">
                {item}
              </Typography>
            )
          )}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("tariff_title")}
        </Typography>
        <Typography variant="body_2">{t("tariff_manual")}</Typography>
        <ul>
          {Object.values(
            t.raw("tariff_manual_list") as Record<string, string>
          ).map((item, index) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
        <Typography variant="body_2">{t("tariff_elevator")}</Typography>
        <ul>
          {Object.values(
            t.raw("tariff_elevator_list") as Record<string, string>
          ).map((item, index) => (
            <Typography key={index} variant="body_3" as="li">
              {item}
            </Typography>
          ))}
        </ul>
      </div>
    </div>
  );
};
