import React from "react";
import s from "./BestSellingProducts.module.scss";
import { Typography } from "../../shared/ui/typography";
import { Item } from "../item";
import { Slider } from "../slider";
import { Product } from "@/api/products/products.types";

type BestSellingProductsProps = {
  bestSellingProducts: {
    data: Product[];
  };
};

export const BestSellingProducts = ({
  bestSellingProducts,
}: BestSellingProductsProps) => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Самые продаваемые товары
      </Typography>
      <Slider itemWidth={330}>
        {bestSellingProducts.data.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
};
