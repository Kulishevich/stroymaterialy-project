import React from "react";
import s from "./BusinessBanner.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";

export const BusinessBanner = () => {
  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Для бизнеса
      </Typography>
      <Image
        src={"/images/for-business/for-business-banner.png"}
        width={1296}
        height={496}
        alt="for business banner"
      />
    </div>
  );
};
