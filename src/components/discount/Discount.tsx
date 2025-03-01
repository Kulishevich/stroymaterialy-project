import React from "react";
import s from "./Discount.module.scss";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { ContentItem } from "@/api/content/content.types";
import Link from "next/link";

type DiscountProps = {
  discount: ContentItem;
};

export const Discount = ({ discount }: DiscountProps) => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Link href={discount.link}>
        <Image
          className={s.image}
          src={`${process.env.NEXT_PUBLIC_DOMIX_BASE_URL}${discount.src}`}
          width={!isMobile ? 636 : 336}
          height={!isMobile ? 260 : 180}
          alt="banner"
        />
      </Link>
    </div>
  );
};
