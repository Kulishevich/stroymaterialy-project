import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./ProductsFilter.module.scss";
import Accordion from "@/components/ui/accordion/Accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { TextField } from "@/components/ui/text-field";

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

type ProductsFilterProps = {
  filters: {
    "category.filters.price.label": {
      "category.filters.price.max": number;
      "category.filters.price.min": number;
    };
    "category.filters.brand.label": string[] | Record<string, string | number>;
  };
};

export const ProductsFilter = ({ filters }: ProductsFilterProps) => {
  console.log(filters);

  return (
    <div className={s.container}>
      <Typography as="h3" variant="h3">
        Фильтр
      </Typography>
      <Accordion title={"Бренд"}>
        {Array.isArray(filters["category.filters.brand.label"])
          ? filters["category.filters.brand.label"].map((brand, index) => (
              <Checkbox key={brand + index} label={brand} />
            ))
          : Object.entries(filters["category.filters.brand.label"] || {}).map(
              ([key, value]) => <Checkbox key={key} label={value} />
            )}
      </Accordion>
      <Accordion title={"Ширина"}>
        {brandFilter.map((brand) => (
          <Checkbox key={brand.id} label={brand.value} />
        ))}
      </Accordion>
      <Accordion title={"Длина"}>
        {brandFilter.map((brand) => (
          <Checkbox key={brand.id} label={brand.value} />
        ))}
      </Accordion>
      <Accordion title={"Производитель"}>
        {brandFilter.map((brand) => (
          <Checkbox key={brand.id} label={brand.value} />
        ))}
      </Accordion>
      <Accordion title={"Цена"}>
        <div className={s.priceContainer}>
          <div className={s.inputContainer}>
            <Typography variant="body_5">От</Typography>
            <TextField placeholder="0" />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">От</Typography>
            <TextField placeholder="20000" />
          </div>
        </div>
      </Accordion>
      <Typography as={"button"} variant="button" className={s.resetFilter}>
        Очистить фильтр
      </Typography>
    </div>
  );
};
