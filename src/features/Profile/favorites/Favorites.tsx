import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./Favoriter.module.scss";
import { useGetFavoriteProductsQuery } from "@/api/products/products.api";
import { FavoriteItem } from "./favorite-item";

const favorites = [
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
  {
    id: "3",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD / шт",
  },
  {
    id: "4",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD / шт",
  },
];

export const Favorites = () => {
  const { data } = useGetFavoriteProductsQuery();
  console.log(data);
  return (
    <div className={s.container}>
      <div className={s.title}>
        <Typography variant="h3" as="h3">
          Избранное
        </Typography>
        <Typography variant="body_6" className={s.countFav}>
          {favorites.length} товаров
        </Typography>
      </div>
      <div className={s.cardsContainer}>
        {favorites.map((favorite) => (
          <FavoriteItem favorite={favorite} key={favorite.id} />
        ))}
      </div>
    </div>
  );
};
