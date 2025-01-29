import React from "react";
import s from "./VacancieBanner.module.scss";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Logo } from "@/assets/icons/logo";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const VacancieBanner = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Domix Клуб
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
            Клуб Мастеров Domix – это рай для любого профессионала.
          </Typography>
          <Typography variant="body_1">
            Shinmag.am приглашает в клуб специалистов по ремонту и
            строительству. Занимаетесь отделочными работами, сантехникой,
            электрикой или оказываете другие строительные услуги?
            Присоединяйтесь к участникам клуба и получайте максимальную выгоду!{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};
