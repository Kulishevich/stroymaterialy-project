import React from "react";
import Image from "next/image";
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
  return (
    <div className={s.container}>
      <CatalogHome categories={categories} />
      <div className={s.banner}>
        {banner[0].src && (
          <Link href={banner[0].link ?? "/"} className={s.mainBanner}>
            <Image src={banner[0].src} fill alt="banner" />
          </Link>
        )}
        <div className={s.smallBannerContainer}>
          {discounts.slice(0, 3).map((discount, index) => (
            <Link
              key={index}
              href={discount.link ?? "/"}
              className={s.discountLink}
            >
              <Image src={discount.src} fill alt="small banner" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
