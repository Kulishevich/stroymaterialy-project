import React from "react";
import s from "./CatalogWithBanners.module.scss";
import { Catalog } from "../catalog/Catalog";
import Image from "next/image";

export const CatalogWithBanners = () => {
  return (
    <div className={s.container}>
      <Catalog />
      <div className={s.banner}>
        <Image
          src={"/images/banner.png"}
          width={966}
          height={380}
          alt="banner"
        />
        <div className={s.smallBannerContainer}>
          <Image
            src={"/images/small-banner1.png"}
            width={306}
            height={219}
            alt="small banner"
          />
          <Image
            src={"/images/small-banner2.png"}
            width={306}
            height={219}
            alt="small banner"
          />
          <Image
            src={"/images/small-banner3.png"}
            width={306}
            height={219}
            alt="small banner"
          />
        </div>
      </div>
    </div>
  );
};