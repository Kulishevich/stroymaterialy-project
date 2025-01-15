import { Typography } from "@/components/ui/typography";
import React from "react";
import s from "./Favoriter.module.scss";
import Image from "next/image";
import { Counter } from "@/components/item/counter";
import { Button } from "@/components/ui/button";
import { BagShoppingIcon } from "@/assets/icons";

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
  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Избранное
      </Typography>
      <div className={s.cardsContainer}>
        {favorites.map((favorite) => (
          <div className={s.card} key={favorite.id}>
            <Image
              src={favorite.image}
              width={177}
              height={177}
              alt="favorite card"
              className={s.image}
            />
            <Typography variant="body_6" as="h3">
              {favorite.title}
            </Typography>
            <Typography variant="body_7">{favorite.price}</Typography>
            <div className={s.buttonsContainer}>
              <Counter />
              <Button className={s.shopButton}>
                <BagShoppingIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
