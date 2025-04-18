import React from "react";
import s from "./LatestCompanyPromotions.module.scss";
import { Typography } from "../../../shared/ui/typography";
import { Discount } from "../../../components/discount";
import { Button } from "@/shared/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import { Slider } from "@/components/slider";
import { ContentItem } from "@/api/content/content.types";

export const LatestCompanyPromotions = ({
  discounts,
}: {
  discounts: ContentItem[];
}) => {
  const t = useTranslations("home.latest_company_promotions");
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      {!isMobile ? (
        <Slider itemWidth={660}>
          {discounts.map((discount, index) => (
            <Discount key={index + discount.key} discount={discount} />
          ))}
        </Slider>
      ) : (
        <div className={s.mobileContainer}>
          {discounts.map((discount, index) => (
            <Discount key={index + discount.key} discount={discount} />
          ))}
        </div>
      )}
      {isMobile && <Button>{t("mobile_button")}</Button>}
    </div>
  );
};
