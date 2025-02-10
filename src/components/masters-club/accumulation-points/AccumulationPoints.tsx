import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./AccumulationPoints.module.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Paths } from "@/shared/enums";

export const AccumulationPoints = () => {
  const t = useTranslations(
    "cooperation.vacancies.masters_club.accumulation_points"
  );

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h4" as="h4">
          {t("title")}
        </Typography>
        <Typography variant="body_1">{t("subtitle")}</Typography>
      </div>
      <ul>
        <Typography variant="body_3" as="li">
          {t("rules.rule1")}
          <Link href={Paths.home}>https://shinmag.am/shinmag-club</Link>
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule2")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule3")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule4")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule5")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule6")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule7")}
        </Typography>
        <Typography variant="body_3" as="li">
          {t("rules.rule8")}
        </Typography>
      </ul>

      <div className={s.footer}>
        <Typography variant="body_2">{t("footer.text")}</Typography>
        <Typography variant="body_1">{t("footer.signature")}</Typography>
      </div>
    </div>
  );
};
