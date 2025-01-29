import { BagShoppingIcon } from "@/assets/icons";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import s from "./Favorite.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const FavoriteItem = ({ favorite }) => {
  const isMobile = useIsMobile("tablet");

  return (
    <div className={s.card} key={favorite.id}>
      <Image
        src={favorite.image}
        width={!isMobile ? 177 : 160}
        height={!isMobile ? 177 : 160}
        alt="favorite card"
        className={s.image}
      />
      <Typography variant="body_6" as="h3">
        {favorite.title}
      </Typography>
      <Typography variant="body_7">{favorite.price}</Typography>
      <div className={s.buttonsContainer}>
        <Counter size="s" />
        <Button className={s.shopButton}>
          <BagShoppingIcon />
        </Button>
      </div>
    </div>
  );
};
