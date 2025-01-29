import React from "react";
import s from "./Discount.module.scss";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const Discount = () => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Image
        src={"/images/middle-banner.png"}
        width={!isMobile ? 636 : 336}
        height={!isMobile ? 260 : 180}
        alt="banner"
      />
      <div className={s.content}>
        <Typography className={s.data} variant="body_5">
          01 декабря-31 декабря 2024
        </Typography>
        <Typography variant="h3" as="h3">
          Скидка 15% на всю продукцию Orio!
        </Typography>
      </div>
    </div>
  );
};
