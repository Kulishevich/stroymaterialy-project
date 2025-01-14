import React from "react";
import s from "./BestSellingProducts.module.scss";
import { Typography } from "../ui/typography";
import { Item } from "../item";

export const BestSellingProducts = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Самые продаваемые товары
      </Typography>
      <div className={s.productContainer}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};
