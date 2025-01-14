import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./ProductsFilter.module.scss";
import { Dropdown } from "@/components/ui/dropdown";

const brandFilter = [
  {
    id: "1",
    value: "BONDIT",
  },
  {
    id: "2",
    value: "Armscotch",
  },
  {
    id: "3",
    value: "SODOBOND",
  },
  {
    id: "4",
    value: "TYTAN",
  },
  {
    id: "5",
    value: "Santa Monica",
  },
];

export const ProductsFilter = () => {
  return (
    <div className={s.container}>
      <Typography as="h3" variant="h3">
        Фильтр
      </Typography>
      <Dropdown placeholder={"Бренд"} items={brandFilter} />
      <Dropdown placeholder={"Ширина"} items={brandFilter} />
      <Dropdown placeholder={"Длина"} items={brandFilter} />
      <Dropdown placeholder={"Производитель"} items={brandFilter} />
      <Dropdown placeholder={"Цена"} items={brandFilter} />
      <Typography as={"button"} variant="button" className={s.resetFilter}>
        Очистить фильтр
      </Typography>
    </div>
  );
};
