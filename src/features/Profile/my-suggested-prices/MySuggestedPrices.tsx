import React from "react";
import { Typography } from "@/components/ui/typography";
import s from "./MySuggestedPrices.module.scss";
import { MySuggestedPricesCard } from "./my-suggested-prices-card";

const products = [
  {
    id: "1",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD / шт",
  },
  {
    id: "2",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD / шт",
  },
];

export const MySuggestedPrices = () => {
  return (
    <div className={s.container}>
      <Typography variant="h3">Мои предложенные цены</Typography>
      <div className={s.cardsContainer}>
        {products.map((product) => (
          <MySuggestedPricesCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
