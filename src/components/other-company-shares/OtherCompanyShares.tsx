import React from "react";
import s from "./OtherCompanyShares.module.scss";
import { Typography } from "../ui/typography";
import { Discount } from "../discount";

export const OtherCompanyShares = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Другие акции компании
      </Typography>
      <div className={s.content}>
        <Discount />
        <Discount />
      </div>
    </div>
  );
};
