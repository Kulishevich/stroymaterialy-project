import React from "react";
import s from "./LatestCompanyPromotions.module.scss";
import { Typography } from "../../../components/ui/typography";
import { Discount } from "../../../components/discount";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import { useGetContentQuery } from "@/api/content/content.api";
import { Slider } from "@/components/slider";

export const LatestCompanyPromotions = () => {
  const t = useTranslations("home.latest_company_promotions");
  const isMobile = useIsMobile("tablet");

  const { data: content } = useGetContentQuery("discounts");

  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        {t("title")}
      </Typography>
      {!isMobile ? (
        <Slider itemWidth={660}>
          {content?.data.map((discount, index) => (
            <Discount key={index + discount.key} discount={discount} />
          ))}
        </Slider>
      ) : (
        <div className={s.mobileContainer}>
          {content?.data.map((discount, index) => (
            <Discount key={index + discount.key} discount={discount} />
          ))}
        </div>
      )}
      {isMobile && <Button>{t("mobile_button")}</Button>}
    </div>
  );
};
