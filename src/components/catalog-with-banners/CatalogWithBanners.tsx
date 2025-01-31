import React from "react";
import s from "./CatalogWithBanners.module.scss";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { CatalogHome } from "../catalog-home/CatalogHome";

export const CatalogWithBanners = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <CatalogHome />
      <div className={s.banner}>
        <img
          src={"/images/banner.png"}
          width={!isMobile ? 966 : 336}
          height={!isMobile ? 380 : 248}
          alt="banner"
        />
        <div className={s.smallBannerContainer}>
          <Image
            src={"/images/small-banner1.png"}
            width={!isMobile ? 306 : 336}
            height={!isMobile ? 219 : 150}
            alt="small banner"
          />
          <Image
            src={"/images/small-banner2.png"}
            width={!isMobile ? 306 : 160}
            height={!isMobile ? 219 : 150}
            alt="small banner"
          />
          <Image
            src={"/images/small-banner3.png"}
            width={!isMobile ? 306 : 160}
            height={!isMobile ? 219 : 150}
            alt="small banner"
          />
        </div>
      </div>
    </div>
  );
};
