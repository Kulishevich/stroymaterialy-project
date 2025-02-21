import React from "react";
import s from "./SimilarProducts.module.scss";
import { Typography } from "../ui/typography";
import { Item } from "../item";
import { Product } from "@/api/products/products.types";
import { Slider } from "../slider";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

type SimilarProductsProps = {
  similars: Product[];
};

export const SimilarProducts = ({ similars }: SimilarProductsProps) => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Похожие продукты
      </Typography>
      {!isMobile ? (
        <Slider itemWidth={330}>
          {similars.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </Slider>
      ) : (
        <div className={s.mobileContainer}>
          {similars.slice(0, 4).map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
