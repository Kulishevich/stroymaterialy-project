import React from "react";
import s from "./SimilarProducts.module.scss";
import { Typography } from "../ui/typography";
import { Item } from "../item";
import { Product } from "@/api/products/products.types";

type SimilarProductsProps = {
  similars: Product[];
};

export const SimilarProducts = ({ similars }: SimilarProductsProps) => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Самые продаваемые товары
      </Typography>
      <div className={s.productContainer}>
        {similars.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
