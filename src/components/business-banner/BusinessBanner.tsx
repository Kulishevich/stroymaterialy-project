import React from "react";
import s from "./BusinessBanner.module.scss";
import { Typography } from "../ui/typography";
import { Logo } from "@/assets/icons/logo";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const BusinessBanner = () => {
  const t = useTranslations("cooperation.for_business.business_banner");

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.imageContainer}>
        <Image
          src={"/images/for-business/for-business.jpg"}
          alt="for business banner"
          className={s.image}
          fill
        />
        <Logo />
        <Typography variant="h4" as="h4">
          {t("subtitle")}
        </Typography>
        <Typography variant="body_1">{t("description.materials")}</Typography>
        <Typography variant="body_1">
          {t("description.about_company")}
        </Typography>
        <Typography variant="body_1">
          {t("description.responsibility")}
        </Typography>
        <Typography variant="body_1">
          {t("description.modern_methods")}
        </Typography>
        <Typography variant="body_1">
          {t("description.fast_and_convenient")}
        </Typography>
      </div>
    </div>
  );
};
