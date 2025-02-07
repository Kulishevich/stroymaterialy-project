import React from "react";
import s from "./LatestCompanyPromotions.module.scss";
import { Typography } from "../../../components/ui/typography";
import { Discount } from "../../../components/discount";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export const LatestCompanyPromotions = () => {
  const t = useTranslations("home.latest_company_promotions");
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      <div className={s.bannersContainer}>
        <Discount />
        <Discount />
      </div>
      {isMobile && <Button>{t("mobile_button")}</Button>}
    </div>
  );
};
