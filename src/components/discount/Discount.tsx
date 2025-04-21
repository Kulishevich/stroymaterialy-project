import React from "react";
import s from "./Discount.module.scss";
import Image from "next/image";
import { ContentItem } from "@/api/content/content.types";
import Link from "next/link";

type DiscountProps = {
  discount: ContentItem;
};

export const Discount = ({ discount }: DiscountProps) => {
  return (
    <div className={s.container}>
      <Link href={discount.link ?? "/"}>
        <Image className={s.image} src={discount.src} fill alt="banner" />
      </Link>
    </div>
  );
};
