import React from "react";
import s from "./Error.module.scss";
import Image from "next/image";
import { Typography } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export const Error = () => {
  const t = useTranslations("error");
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography variant="h1" as="h1">
          {t("title")}
        </Typography>
        <Typography variant="body_1" as="p">
          {t("description")}
        </Typography>
        <Button as={Link} href={Paths.home}>
          {t("button")}
        </Button>
      </div>
      <div className={s.imageContainer}>
        <Image
          className={s.image1}
          src={"/images/error/error-elem1.png"}
          width={357}
          height={294}
          alt="error"
        />
        <Image
          className={s.image2}
          src={"/images/error/error-elem2.png"}
          width={560}
          height={271}
          alt="error"
        />
        <Image
          className={s.image3}
          src={"/images/error/404.png"}
          width={!isMobile ? 704 : 332}
          height={!isMobile ? 270 : 120}
          alt="error"
        />
      </div>
    </div>
  );
};
