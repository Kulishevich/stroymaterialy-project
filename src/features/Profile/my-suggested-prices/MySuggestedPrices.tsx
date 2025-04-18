import React from "react";
import { Typography } from "@/shared/ui/typography";
import s from "./MySuggestedPrices.module.scss";
import { MySuggestedPricesCard } from "./my-suggested-prices-card";
import { useTranslations } from "next-intl";
import { useGetPriceOffersQuery } from "@/api/products/products.api";

export const MySuggestedPrices = () => {
  const t = useTranslations("profile.my_suggested_prices");
  const { data: priceOffers } = useGetPriceOffersQuery();

  return (
    <div className={s.container}>
      <Typography variant="h3">{t("title")}</Typography>
      <div className={s.cardsContainer}>
        {priceOffers?.data.map((product) => (
          <MySuggestedPricesCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
