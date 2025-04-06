import { BagShoppingIcon, HeartIcon } from "@/shared/assets/icons";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React, { useState } from "react";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Product } from "@/api/products/products.types";
import { useAddItemCartMutation } from "@/api/cart/cart.api";
import Link from "next/link";
import { showToast } from "@/components/ui/toast";
import {
  useAddInFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/api/products/products.api";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import clsx from "clsx";
import s from "./Favorite.module.scss";
import { useTranslations } from "next-intl";

type FavoriteItemProps = {
  favorite: Product;
};

export const FavoriteItem = ({ favorite }: FavoriteItemProps) => {
  const t = useTranslations("item");
  const isMobile = useIsMobile("tablet");
  const [count, setCount] = useState(1);
  const favoritesItems = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favoritesItems.includes(favorite.id);
  const isDiscount = !!Number(favorite.discount.split(" ")[0]);

  const [addItemCart] = useAddItemCartMutation();
  const [addInFavorite] = useAddInFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleAddFavorite = async () => {
    if (isFavorite) {
      try {
        await deleteFavorite(favorite.id).unwrap();
        showToast({ message: t("delete_from_favorite"), variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({
          message: t("delete_from_favorite_error"),
          variant: "error",
          description: t("delete_from_favorite_error_description"),
        });
      }
    } else {
      try {
        await addInFavorite({ products: [favorite?.id] }).unwrap();
        showToast({
          message: t("add_in_favorite"),
          variant: "success",
        });
      } catch (err: unknown) {
        console.error(err);
        showToast({
          message: t("add_in_favorite_error"),
          variant: "error",
          description: t("add_in_favorite_error_description"),
        });
      }
    }
  };

  const handleAddItemInCart = async () => {
    const fetchData = {
      id: favorite.id,
      count: count,
    };
    try {
      await addItemCart(fetchData).unwrap();
      setCount(1);
      showToast({ message: t("add_in_cart"), variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({
        message: t("add_in_cart_error"),
        variant: "error",
        description: t("add_in_cart_error_description"),
      });
    }
  };

  return (
    <div className={s.card} key={favorite.id}>
      <Link href={`/product/${favorite.id}`}>
        <Image
          src={favorite.images.main.src}
          width={!isMobile ? 177 : 160}
          height={!isMobile ? 177 : 160}
          alt="favorite card"
          className={s.image}
        />
      </Link>
      <Typography variant="body_6" as="h3">
        {favorite.name}
      </Typography>
      {isDiscount ? (
        <Typography variant="body_7" className={s.discount}>
          {favorite.discountedPrice}
          <Typography variant="body_8" as="span">
            {favorite.price}
          </Typography>
        </Typography>
      ) : (
        <Typography variant="body_7">{favorite.price}</Typography>
      )}
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
      <Button
        variant="only_icon"
        onClick={handleAddFavorite}
        className={clsx(s.favoriteButton, isFavorite && s.active)}
      >
        <HeartIcon />
      </Button>
    </div>
  );
};
