import React from "react";
import s from "./InfoRegularCustomer.module.scss";
import { Typography } from "@/shared/ui/typography";
import { useTranslations } from "next-intl";

export const InfoRegularCustomer = () => {
  const t = useTranslations("regular_customer.info_regular_customer");

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <Typography variant="h3" as="h3">
        {t("subtitle")}
      </Typography>

      <ol>
        <Typography variant="h3" as="h3">
          {t("how_it_works.title")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.register")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.first_purchase")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.personal_discounts")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("how_it_works.steps.free_delivery")}
        </Typography>
      </ol>

      <ul>
        <Typography variant="body_3" as="li">
          {t("notes.discount_visibility")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("notes.accumulate_and_save")}
        </Typography>
      </ul>

      <Typography variant="h3" as="h3">
        {t("register_now")}
      </Typography>
    </div>
  );
};
