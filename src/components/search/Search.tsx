import React from "react";
import s from "./Search.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { Item } from "../item";

export const Search = () => {
  return (
    <div className={s.container}>
      <Typography variant="body_2" as="h2">
        Поиск по категориям
      </Typography>
      <div className={s.categoryContainer}>
        <div className={s.categoryItem}>
          <Image
            src={"/images/category/category1.png"}
            width={36}
            height={36}
            alt="category"
            className={s.imageCategory}
          />
          <Typography variant="body_4">Спецодежда и средства защиты</Typography>
        </div>
        <div className={s.categoryItem}>
          <Image
            src={"/images/category/category2.png"}
            width={36}
            height={36}
            alt="category"
            className={s.imageCategory}
          />
          <Typography variant="body_4">Сантехника</Typography>
        </div>
        <div className={s.categoryItem}>
          <Image
            src={"/images/category/category3.png"}
            width={36}
            height={36}
            alt="category"
            className={s.imageCategory}
          />
          <Typography variant="body_4">Стройматериалы</Typography>
        </div>
        <div className={s.categoryItem}>
          <Image
            src={"/images/category/category4.png"}
            width={36}
            height={36}
            alt="category"
            className={s.imageCategory}
          />
          <Typography variant="body_4">Сад и огород</Typography>
        </div>
      </div>
      <Typography variant="body_2" as="h2">
        Поиск по товарам
      </Typography>
      <div className={s.productsContainer}>
        <Item variant="horizontal" />
        <Item variant="horizontal" />
        <Item variant="horizontal" />
      </div>
    </div>
  );
};
