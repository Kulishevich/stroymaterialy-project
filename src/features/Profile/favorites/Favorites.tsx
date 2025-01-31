import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./Favoriter.module.scss";
import { useGetFavoriteProductsQuery } from "@/api/products/products.api";
import { FavoriteItem } from "./favorite-item";

export const Favorites = () => {
  const { data } = useGetFavoriteProductsQuery();

  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h3" as="h3">
          Избранное
        </Typography>
        <Typography variant="body_6" className={s.countFav}>
          {data?.data.favorites.length} товаров
        </Typography>
      </div>
      <div className={s.cardsContainer}>
        {data?.data.favorites.map((favorite) => (
          <FavoriteItem favorite={favorite} key={favorite} />
        ))}
      </div>
    </div>
  );
};
