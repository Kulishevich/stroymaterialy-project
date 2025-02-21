import React from "react";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { CatalogHome } from "../catalog-home/CatalogHome";
import { useGetContentQuery } from "@/api/content/content.api";
import s from "./CatalogWithBanners.module.scss";
import Link from "next/link";

export const CatalogWithBanners = () => {
  const isMobile = useIsMobile("tablet");
  const { data: content } = useGetContentQuery("discounts");
  const { data: banner } = useGetContentQuery("firstBanner");
  // thirdBanner firstBanner secondBanner services discounts firstBanner

  return (
    <div className={s.container}>
      <CatalogHome />
      <div className={s.banner}>
        {banner?.data[0].src && (
          <Link href={banner?.data[0].link}>
            <Image
              src={banner?.data[0].src}
              width={!isMobile ? 966 : 336}
              height={!isMobile ? 380 : 248}
              alt="banner"
              className={s.image}
            />
          </Link>
        )}
        <div className={s.smallBannerContainer}>
          {content?.data.slice(0, 3).map((discount, index) => (
            <Link key={index} href={discount.link} className={s.discountLink}>
              <Image
                src={discount.src}
                width={!isMobile ? 306 : index === 0 ? 336 : 160}
                height={!isMobile ? 219 : 150}
                alt="small banner"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
