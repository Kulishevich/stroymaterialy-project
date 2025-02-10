import React from "react";
import s from "./TermsOfService.module.scss";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export const TermsOfService = () => {
  const t = useTranslations("delivery_and_payment.terms_of_service");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <div className={s.elem}>
        <Typography variant="body_2" as="h4">
          {t("delivery_info")}
        </Typography>
        <ul>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule1")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule2")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule3")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule4")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule5")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule6")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("delivery_rules.rule7")}
          </Typography>
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          {t("service_cost.title")}
        </Typography>
        <ul>
          <Typography variant="body_3" as="li">
            {t("service_cost.info1")}
          </Typography>
          <Typography variant="body_3" as="li">
            {t("service_cost.info2")}
          </Typography>
        </ul>
      </div>

      <div className={s.info}>
        <Typography variant="h4" as="h4">
          {t("features.title")}
        </Typography>
        <Typography variant="body_2">{t("features.info")}</Typography>
      </div>
    </div>
  );
};
