import React from "react";
import s from "./BestSellingProducts.module.scss";
import { Typography } from "../ui/typography";
import { Item } from "../item";
import { useGetTrendsProductsQuery } from "@/api/products/products.api";
import { Slider } from "../slider";

export const BestSellingProducts = () => {
  const { data: product, isLoading } = useGetTrendsProductsQuery({
    trend: "popular",
    perPage: 4,
  });

  if (!product) return;

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Самые продаваемые товары
      </Typography>
      <Slider itemWidth={330}>
        {!isLoading &&
          product &&
          product.data.map((product) => (
            <Item product={product} key={product.id} />
          ))}
      </Slider>
    </div>
  );
};
