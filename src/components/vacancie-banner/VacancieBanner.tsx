import React from "react";
import s from "./VacancieBanner.module.scss";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Logo } from "@/shared/assets/icons/logo";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export const VacancieBanner = () => {
  const t = useTranslations("cooperation.vacancies");
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.imageContainer}>
        <Image
          src={"/images/for-business/vacancie-banner.jpg"}
          width={!isMobile ? 1296 : 336}
          height={!isMobile ? 328 : 335}
          alt="banner"
          className={s.image}
        />
        <div className={s.content}>
          <Logo variant={!isMobile ? "dark" : "light"} />
          <Typography variant="h4" as="h4">
            {t("vacancie_banner.title")}
          </Typography>
          <Typography variant="body_1">
            {t("vacancie_banner.content")}
          </Typography>
        </div>
      </div>
    </div>
  );
};
