import React from "react";
import s from "./LatestCompanyPromotions.module.scss";
import { Typography } from "../../../components/ui/typography";
import { Discount } from "../../../components/discount";

export const LatestCompanyPromotions = () => {
  return (
    <div className={s.main}>
      <Typography variant="h2" as="h2">
        Последние акции компании
      </Typography>
      <div className={s.bannersContainer}>
        <Discount />
        <Discount />
      </div>
    </div>
  );
};
