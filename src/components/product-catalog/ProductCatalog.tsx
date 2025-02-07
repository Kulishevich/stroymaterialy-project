import React, { useState } from "react";
import { Typography } from "../ui/typography";
import { Item } from "../item";
import clsx from "clsx";
import { useGetTrendsProductsQuery } from "@/api/products/products.api";
import { useTranslations } from "next-intl";
import s from "./ProductCatalog.module.scss";

export const ProductCatalog = () => {
  const t = useTranslations("home.products_catalog");
  const sort = [
    {
      id: "1",
      value: "popular",
      title: t("popular"),
    },
    {
      id: "2",
      value: "discounted",
      title: t("discounted"),
    },
    {
      id: "3",
      value: "newest",
      title: t("newest"),
    },
  ];
  const [activeSort, setActiveSort] = useState<string>(sort[0].value);
  const { data: products, isLoading } = useGetTrendsProductsQuery({
    trend: activeSort,
    perPage: 12,
  });

  console.log(products);

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        {t("title")}
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
