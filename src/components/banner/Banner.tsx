import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import { Button } from "../../shared/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import { ContentItem } from "@/api/content/content.types";
import Link from "next/link";
import { Paths } from "@/shared/enums";

export const Banner = ({ secondBanner }: { secondBanner: ContentItem[] }) => {
  const isMobile = useIsMobile("tablet");
  const t = useTranslations("about");

  return (
    <div className={s.container}>
      {secondBanner?.[0]?.src && (
        <Image
          src={secondBanner[0].src}
          width={!isMobile ? 1296 : 336}
          height={!isMobile ? 320 : 210}
          alt="big banner"
          className={s.image}
        />
      )}
      <Button as={Link} href={Paths.catalog} className={s.button}>
        {t("banner")}
      </Button>
    </div>
  );
};
