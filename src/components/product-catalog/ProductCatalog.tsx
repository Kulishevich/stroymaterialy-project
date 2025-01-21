import React, { useState } from "react";
import { Typography } from "../ui/typography";
import s from "./ProductCatalog.module.scss";
import { Item } from "../item";
import clsx from "clsx";
import { useGetTrendsProductsQuery } from "@/api/products/products.api";

const sort = [
  {
    id: "1",
    title: "Самые продаваемые товары",
    value: "popular",
  },
  {
    id: "2",
    title: "Акции",
    value: "discounted",
  },
  {
    id: "3",
    title: "Новинки",
    value: "newest",
  },
];

export const ProductCatalog = () => {
  const [activeSort, setActiveSort] = useState<string>(sort[0].value);
  const { data: products, isLoading } = useGetTrendsProductsQuery({
    trend: activeSort,
    perPage: 4,
  });

  console.log(products);

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Каталог продукции
      </Typography>
      <div className={s.sort}>
        {sort.map((elem) => (
          <Typography
            variant="body_4"
            as="button"
            key={elem.id}
            onClick={() => setActiveSort(elem.value)}
            className={clsx(activeSort === elem.value && s.active)}
          >
            {elem.title}
          </Typography>
        ))}
      </div>
      {!isLoading && products && (
        <div className={s.itemsContainer}>
          {products.data.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
