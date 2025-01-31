import { BagShoppingIcon } from "@/assets/icons";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React, { useState } from "react";
import s from "./Favorite.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Product } from "@/api/products/products.types";
import { useAddItemCartMutation } from "@/api/cart/cart.api";

type FavoriteItemProps = {
  favorite: Product;
};

export const FavoriteItem = ({ favorite }: FavoriteItemProps) => {
  const isMobile = useIsMobile("tablet");
  const [count, setCount] = useState(1);
  const [addItemCart] = useAddItemCartMutation();

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleAddItemInCart = async () => {
    const fetchData = {
      id: favorite.id,
      count: count,
    };
    try {
      await addItemCart(fetchData).unwrap();
      setCount(1);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <div className={s.card} key={favorite.id}>
      <Image
        src={favorite.images.main.src}
        width={!isMobile ? 177 : 160}
        height={!isMobile ? 177 : 160}
        alt="favorite card"
        className={s.image}
      />
      <Typography variant="body_6" as="h3">
        {favorite.name}
      </Typography>
      <Typography variant="body_7">{favorite.price}</Typography>
      <div className={s.buttonsContainer}>
        <Counter
          size="s"
          countCurrent={count}
          increment={increment}
          decrement={decrement}
        />
        <Button className={s.shopButton} onClick={handleAddItemInCart}>
          <BagShoppingIcon />
        </Button>
      </div>
    </div>
  );
};
