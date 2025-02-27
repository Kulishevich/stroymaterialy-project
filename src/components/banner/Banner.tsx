import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import { useGetContentQuery } from "@/api/content/content.api";

export const Banner = () => {
  const isMobile = useIsMobile("tablet");
  const t = useTranslations("about");

  const { data: content } = useGetContentQuery("secondBanner");

  return (
    <div className={s.container}>
      {content?.data[0].src && (
        <Image
          src={`http://api.domix.am${content?.data[0].src}`}
          width={!isMobile ? 1296 : 336}
          height={!isMobile ? 320 : 210}
          alt="big banner"
          className={s.image}
        />
      )}
      <Button className={s.button}>{t("banner")}</Button>
    </div>
  );
};
