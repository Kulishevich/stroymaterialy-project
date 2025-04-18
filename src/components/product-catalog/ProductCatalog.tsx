import React, { useState } from "react";
import { Typography } from "../../shared/ui/typography";
import { Item } from "../item";
import clsx from "clsx";
import { useGetTrendsProductsQuery } from "@/api/products/products.api";
import { useTranslations } from "next-intl";
import { Slider } from "../slider";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Product } from "@/api/products/products.types";
import s from "./ProductCatalog.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const ProductCatalog = ({
  popularProducts,
  discountedProducts,
  newestProducts,
}: {
  popularProducts: { data: Product[] };
  discountedProducts: { data: Product[] };
  newestProducts: { data: Product[] };
}) => {
  const isMobile = useIsMobile("tablet");
  const token = useSelector((state: RootState) => state.auth.token);
  const t = useTranslations("home.products_catalog");
  const sort = [
    {
      id: "1",
      value: "popular",
      title: t("popular"),
      content: popularProducts,
    },
    {
      id: "2",
      value: "discounted",
      title: t("discounted"),
      content: discountedProducts,
    },
    {
      id: "3",
      value: "newest",
      title: t("newest"),
      content: newestProducts,
    },
  ];
  const [activeSort, setActiveSort] = useState<string>(sort[0].value);
  const { data: productsData, isFetching } = useGetTrendsProductsQuery(
    {
      trend: activeSort,
      perPage: !isMobile ? 12 : 4,
    },
    { skip: !token }
  );

  const activeProducts = !token
    ? sort?.find((elem) => elem.value === activeSort)?.content
    : isFetching
    ? sort?.find((elem) => elem.value === activeSort)?.content
    : productsData;

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
      {!isMobile ? (
        <Slider itemWidth={330}>
          {activeProducts?.data.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </Slider>
      ) : (
        <div className={s.mobileContainer}>
          {activeProducts?.data.slice(0, 4).map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
