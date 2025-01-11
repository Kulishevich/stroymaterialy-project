import React from "react";
import s from "./Shares.module.scss";
import { Typography } from "../ui/typography";
import { Discount } from "../discount";
import { Breadcrumbs } from "../ui/breadcrumbs";

export const Shares = () => {
  return (
    <div className={s.container}>
      <Breadcrumbs />
      <Typography variant="h1" as="h1">
        Акции
      </Typography>
      <div className={s.sharesContainer}>
        <Discount />
        <Discount />
        <Discount />
        <Discount />
        <Discount />
        <Discount />
        <Discount />
        <Discount />
      </div>
    </div>
  );
};
