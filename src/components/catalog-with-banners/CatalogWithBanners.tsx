import React from "react";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { CatalogHome } from "../catalog-home/CatalogHome";
import Link from "next/link";
import { ContentItem } from "@/api/content/content.types";
import s from "./CatalogWithBanners.module.scss";
import { CategoryArgs } from "@/api/categories/categories.types";

type CatalogWithBannersProps = {
  discounts: ContentItem[];
  banner: ContentItem[];
  categories: { data: CategoryArgs[] };
};

export const CatalogWithBanners = ({
  discounts,
  banner,
  categories,
}: CatalogWithBannersProps) => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <CatalogHome categories={categories} />
      <div className={s.banner}>
        {banner[0].src && (
          <Link href={banner[0].link ?? "/"}>
            <Image
              src={banner[0].src}
              width={!isMobile ? 966 : 336}
              height={!isMobile ? 380 : 248}
              alt="banner"
              className={s.image}
            />
          </Link>
        )}
        <div className={s.smallBannerContainer}>
          {discounts.slice(0, 3).map((discount, index) => (
            <Link
              key={index}
              href={discount.link ?? "/"}
              className={s.discountLink}
            >
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
